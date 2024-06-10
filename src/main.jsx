import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './Component/Routes/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import CreatePost from './Component/CreatePost.jsx'
import PostList from './Component/PostList.jsx'
import MarketPlace from './Component/MarketPlace.jsx'
import Notification from './Component/Notification.jsx'
import Login from './Component/Login.jsx'
import SignUp from './Component/Sign-Up.jsx'
import VedioCard from './Component/VedioCard.jsx'
import FriendRequest from './Component/FriendRequest.jsx'
// import './index.css'

const router = createBrowserRouter([
  {path: '/', element: <App/>, children: [
    {path: '/', element: <PostList />},
    {path: '/vedios', element: <VedioCard />},
    {path: '/friend-Request', element: <FriendRequest />},
    {path: '/market-place', element: <MarketPlace />},
    {path: '/Notification', element: <Notification />},
    {path: '/create-post', element: <CreatePost />},
  ]},
  {path:'/login', element: <Login />},
  {path:'/signUp', element:<SignUp />}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
