import { React } from "react";
import { Outlet, useParams, Link, useNavigate } from "react-router-dom";

const blogposts = [
  {
    id: 1,
    title: "First post",
    author: "Glenn",
    excerpt: "This is the first post.",
  },
  {
    id: 2,
    title: "Second post",
    author: "Nnelg",
    excerpt: "This is the second post.",
  },
];

const SinglePost = () => {
  const { postId } = useParams(); // Extract postId from the URL
  const navigate = useNavigate();
  const post = blogposts.find((p) => p.id.toString() === postId); // Find the post by ID

  if (!post) {
    return <h1>Post not found</h1>;
  }

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="container-singlePost">
      <div>
        <h1>{post.title}</h1>
        <p>By {post.author}</p>
        <p>{post.content}</p>
        <Link to="comments">View Comments</Link>
        <Outlet />
      </div>
      <button onClick={handleGoHome}>Go Home</button>
    </div>
  );
};

export default SinglePost;
