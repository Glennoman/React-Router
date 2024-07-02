import React from "react";
import { useParams } from "react-router-dom";

const commentsData = {
    1: ["Great post!", "Very informative."],
    2: ["I disagree with some points.", "Well written."],
};

const Comments = () => {
    const {postId} = useParams();
    const comments = commentsData[postId] || ["No comments yet."];

    return (
        <div>
            <h2>Comments</h2>
            <ul className="no-bullets">
                {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
        </div>
    );
};

export default Comments;