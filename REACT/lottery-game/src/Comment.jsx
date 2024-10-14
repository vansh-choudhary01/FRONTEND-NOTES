import { useState } from "react";
import "./Comment.css"
import CommentsForm from "./CommentsForm";

export default function Comment() {
    let [comments, setComments] = useState([{
        username: "@sk",
        remark: "Good work",
        rating: 4,
    }])

    let addNewComment = (comment) => {
        setComments((prevComments) => {
            return [...prevComments, comment];
        })
    }

    return (
        <>
            <CommentsForm addComment={addNewComment}/>
            <div className="comments">
                <h3>All Comments</h3>
                {comments.map((el, idx) => {
                    return (
                        <div className="comment" key={idx}>
                            <span>{el.remark}</span>
                            &nbsp; &nbsp;
                            <span>rating : {el.rating}</span>
                            <p>- {el.username}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}