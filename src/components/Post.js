import React from "react";
import { useNavigate } from "react-router-dom";

const Post =({title,text,date,id  })=>{
      const navigate = useNavigate();

      return (
        <div className="post" onClick={()=>navigate(`/post/${id}`)}>
          <h2>{title}</h2>
          <p>{text}</p>
          <p className="post-date">{date}</p>
        </div>
      );
  }
  
export default Post;