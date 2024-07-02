import React from "react";
import { Outlet, useParams, Link, useNavigate } from "react-router-dom";
import SinglePost from "./SinglePost";

const blogposts = [
    { id: 1, title: "First post", author: "Glenn", excerpt: "This is the first post."},
    { id: 2, title: "Second post", author: "Nnelg", excerpt: "This is the second post."},
];

const Home = () => {
    return (
        <div className="container">
            <h1>Home</h1>
            <ul className="no-bullets">
                {blogposts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>By {post.author}</p>
                        <p>{post.excerpt}</p>
                        <Link to={`/post/${post.id}`}>Read more</Link>
                        </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;