import { useContext } from "react";
import { RiChatDeleteFill } from "react-icons/ri";
import { ContextPost } from "./Store/ContextPost";

function Posts({ postData}) {
  let {deletePost} = useContext(ContextPost)
  return (
    <div className="card Posts" style={{ width: "25rem" }}>
      <div className="card-body">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(postData.id)}>
          <RiChatDeleteFill />
          <span className="visually-hidden">unread messages</span>
        </span>
        <h5 className="card-title">{postData.title}</h5>
        <p className="card-text">{postData.body}</p>
        <div className="alert alert-danger" role="alert">
          {`The ${postData.reaction} on this post.`}
        </div>
        {postData.tags.map((tag) => <span className="badge rounded-pill text-bg-primary tags" key={tag}>{tag}</span>
        )}
        
      </div>
    </div>
  );
}

export default Posts;
