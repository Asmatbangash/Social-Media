import { useContext, useRef } from "react";
import { ContextPost } from "./Store/ContextPost";


function CreatePost(){
  const {addPost} = useContext(ContextPost);

  const useridElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef()

  let handlSubmit = (event) =>{
    event.preventDefault();
    const userId = useridElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reaction = reactionElement.current.value;
    const tags = tagsElement.current.value.split(' ');

    useridElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionElement.current.value = "";
    tagsElement.current.value = "";

    fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId,
    title,
    body,
    reaction,
    tags
  })
})
.then(res => res.json())
.then(post => addPost(post));

  } 
    return (
      <form className="Posts" onSubmit={handlSubmit}>
      <div className="mb-3">
        <label htmlFor="UserId" className="form-label">UserId</label>
        <input type="text" placeholder="Enter UserId" className="form-control" id="UserId" aria-describedby="emailHelp" ref={useridElement}/>
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">title</label>
        <input type="text" placeholder="Ener your title" className="form-control" id="title" ref={titleElement}/>
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">body</label>
        <textarea placeholder="write something about your post." className="form-control" id="body" ref={bodyElement}/>
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">Reaction</label>
        <input type="number" placeholder = 'How many reaction did you give.'className="form-control" id="reaction" ref={reactionElement}/>
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">tags</label>
        <input type="text" placeholder = 'How many reaction did you give.'className="form-control" id="tags" ref={tagsElement}/>
      </div>
      <button type="submit" className="btn btn-primary">Post</button>
    </form>
    )
}

export default CreatePost;