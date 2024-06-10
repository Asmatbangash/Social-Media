

import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import Numan from './Store/images/Numan.jpeg'
import Hammad from './Store/images/Hammad.jpeg'
import Manaf from './Store/images/Manaf.jpeg'


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

 function FriendRequest({path}) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let friendList = [
    {
      id:1, 
      prPic: 'R',
      name:'Rehan',
    },
    {
      id:2, 
      prPic: 'a',
      name:'Aman',
    },
    {
      id:3, 
      prPic: 'j',
      name:'junaid',
    }, {
      id:4, 
      prPic: 'b',
      name:'baber',
    }, {
      id:5, 
      prPic: 'f',
      name:'fayaz',
    }
  ]

  return (
    <>
      {friendList.map((friend) => (
             <Card sx={{ maxWidth: 345 }} className='Posts' key={friend.id}>
             <CardHeader
               avatar={
                 <Avatar  sx={{ bgcolor: red[500] }} aria-label="recipe">
                   {friend.prPic}
                 </Avatar>
               }
               title={friend.name}
               subheader="45 matual friend"
             />
            <button type="button" className="btn btn-primary btn-sm" style={{  margin: '0px 25px 10px 70px',
           width: '25%'}}>Confirm</button>
       <button type="button" className="btn btn-secondary btn-sm" style={{  margin: '0px 2px 10px 10px',
           width: '25%'}}>Delete</button>
           </Card>
      ))}
   

    

    </>
  );
}

export default FriendRequest;