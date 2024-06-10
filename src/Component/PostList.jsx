
import { useContext, useEffect, useState } from 'react';
import Posts from './Posts'
import { ContextPost } from './Store/ContextPost';
import NoPost from './NoPost';


function PostList(){
    let {post, fetchData} = useContext(ContextPost)
    return(
        <>
        {fetchData && post.length === 0 && <NoPost/>}
         {!fetchData && post.map((postData) => <Posts key={postData.id} postData={postData}/>)}
         </>

    )
}

export default PostList;