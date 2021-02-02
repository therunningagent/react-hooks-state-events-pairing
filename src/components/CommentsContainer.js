import React, { useState } from "react";
import CommentItem from "./CommentItem";

function CommentsContainer({comments}){
    const CommentComp = comments.map((comment) => {
        return <CommentItem 
            key={comment.id} 
            user={comment.user}
            comment={comment.comment}
            />
    })

    const [hide, setHide] = useState(false)

    function hideComment(e){
        if (!hide) {
            e.target.textContent = "Show Comments"
        }else{
            e.target.textContent = "Hide Comments"
        }
        setHide(hide => !hide)
        
    }


    return (
        <div>
            <br/>
            <button onClick={hideComment}>Hide Comments</button>
                {hide ? null : {CommentComp}}
            <br/>
            <hr></hr>
            <h4>{comments.length} Comments</h4>
                <ul>
                    <li>{CommentComp}</li>
                </ul>
        </div>
    )
};

export default CommentsContainer;