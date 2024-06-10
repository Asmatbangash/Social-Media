
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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

 function VedioCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let vedios = [
    {
        id: 1,
        prImg: 'H',
        name: 'Hammad khan',
        bodyImg: 'https://source.unsplash.com/random/?Cryptocurrency&2',
        body: 'I am a small boy consectetur adipisicing elit. Autem laborum officia tempora animi ad nihil fugit cupiditate illo excepturi, blanditiis alias soluta explicabo culpa debitis tempore unde, nulla eveniet eum!.'
    },
    {
        id: 2,
        prImg: 'N',
        name: 'Numan Khan',
        bodyImg: 'https://source.unsplash.com/random/?Cryptocurrency&4',
        body: 'i am a millinior sit, amet consectetur adipisicing elit. Quidem ex at quia, illum, consectetur tenetur dolores, quaerat adipisci sequi atque officia facilis. Temporibus non fuga at veritatis, consequatur nesciunt reiciendis'
    },
    {
        id: 3,
        prImg: 'J',
        name: 'jamshed ahmad',
        bodyImg: 'https://source.unsplash.com/random/?Cryptocurrency&6',
        body: 'The dolor, sit amet consectetur adipisicing elit. Repellendus voluptate dicta ratione velit ipsa. Perspiciatis laborum architecto aut quod cum earum temporibus distinctio quas doloribus repudiandae, voluptatibus at, iure ipsum.'
    },
    {
        id: 4,
        prImg: 'K',
        name: 'kamran ahmad',
        bodyImg: 'https://source.unsplash.com/random/?spots',
        body: 'Amet consectetur adipisicing elit. Labore hic repudiandae, saepe fugit aliquam a cum quo ducimus dolorum repellat maxime sequi autem doloribus blanditiis nesciunt dolores dolorem similique pariatur.'
    }
]

  return (
    <>
    {
      vedios.map((vedio)=> ( <Card sx={{ maxWidth: 345 }} className='VedioCard' key={vedio.id}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {vedio.prImg}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={vedio.name}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={vedio.bodyImg}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {vedio.bodyImg}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>))
    }
    </>
  );
}
export default VedioCard;