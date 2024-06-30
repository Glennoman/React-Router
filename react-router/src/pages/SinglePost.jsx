import { React } from "react";
import { useParams } from "react-router-dom";

const blogposts = [
    { id: 1, title: "First post", author: "Glenn", excerpt: "This is the first post."},
    { id: 2, title: "Second post", author: "Nnelg", excerpt: "This is the second post."},
];

const SinglePost = () => {
    const {postId} = useParams();
    const post = blogposts.find(p => p.id.toString() === postId);

    if (!post) {
        return <h1>Post not found</h1>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>By {post.author}</p>
            <p>{post.content}</p>
        </div>
    );
};

export default SinglePost;