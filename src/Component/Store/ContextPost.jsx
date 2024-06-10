import { createContext, useReducer, useState, useEffect } from "react";

export const ContextPost = createContext({
  post: [],
  addPost: () => {},
  deletePost: () => {},
  fetchData: false
});

let postReducer = (curPost, action) => {
  let newPost = curPost;
  if (action.type === "Delete_Post") {
    newPost = curPost.filter((post) => post.id !== action.payload.postid);
  } else if (action.type === "Add_Post") {
    newPost = [action.payload,...curPost]
  }
  else if(action.type === 'add_dumy_posts'){
    newPost = action.payload.posts;
  }
  return newPost;
};
const ContextPostProvider = ({ children }) => {
  let [post, dispatchPost] = useReducer(postReducer,[]);
  let [fetchData, setFatchData] = useState(false)


  let addPost = (post) => {
    dispatchPost({
      type: "Add_Post",
      payload: post,
      
    });
  };

  let deletePost = (postid) => {
    dispatchPost({
      type: "Delete_Post",
      payload: {
        postid,
      },
    });
  };

  let addDumyPosts = (posts) =>{
    dispatchPost({
      type: 'add_dumy_posts',
      payload:{
        posts
      }
    })
  }
  useEffect(()=>{
    setFatchData(true)
  fetch('https://dummyjson.com/posts')
  .then(res => res.json())
  .then(data => {
    addDumyPosts(data.posts)
    setFatchData(false)
  });
}, [])
  return (
    <ContextPost.Provider value={{ post, addPost, deletePost, fetchData}}>
      {children}
    </ContextPost.Provider>
  );
};

// let default_Post = [
//   {
//     id: "1",
//     title: "Life of the Software Engineering",
//     body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quas ad rem necessitatibus suscipit expedita labore aliquam nulla illum odit consequuntur repellendus voluptatibus deleniti distinctio nesciunt, repellat nam porro ipsum.",
//     reaction: 1000,
//     userId: "",
//     tags: ["like", "comment", "share"],
//   },
//   {
//     id: "2",
//     title: "Embasador Of Pakistan",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque illum minima porro vero dignissimos, deleniti repellendus amet quidem animi qui quo eveniet deserunt! Tempora minus unde esse officia repellat veritatis.",
//     reaction: 100,
//     userId: "",
//     tags: ["like", "comment", "share"],
//   },
//   {
//     id: "3",
//     title: "The big Think",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, veritatis. Mollitia numquam eveniet necessitatibus facere molestias voluptatem, voluptatum laboriosam atque. Quam blanditiis quas ducimus iste tempore enim id libero culpa.",
//     reaction: 200,
//     userId: "",
//     tags: ["like", "comment", "share"],
//   },
// ];

export default ContextPostProvider;
