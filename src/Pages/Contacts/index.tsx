import React from 'react';

import {ContainerContact} from './style';
import {BackHome} from '../components/BackHome';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import studentLuis from '../../img/students/luis.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 300,
    marginBottom: '40px',
  },
});


export const Contacts: React.FC = () => {
  interface Students {
    img: string;
    name: string;
    about: string;
    linkedin: string;
    github: string;
  } 

  const classes = useStyles();
  const students = [];

  students.push({
    img: 'image',
    name: 'Eduardo da Silva Brandão',
    about: 'about',
    linkedin: 'linkedin',
    github: 'github'
  })

  students.push({
    img: studentLuis,
    name: 'Luis Siczkoriz',
    about: 'about',
    linkedin: 'linkedin',
    github: 'github'
  })
  
  students.push({
    img: 'image',
    name: 'Cleide de Paula',
    about: 'Machine learn',
    linkedin: 'www.linkedin.com/in/cleide-de-paula/',
    github: 'github.com/clepaula/'
  })


  return (<>
    <BackHome />
    <ContainerContact>
      {students.map((student: Students, index) => (
        <Card className={classes.root} key={index}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={student.img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {student.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {student.about}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {/* {student.linkedin} */}
            Linkedin
          </Button>
          <Button size="small" color="primary">
            {/* {student.github} */}
            Github
          </Button>
        </CardActions>
      </Card>
      ))}
    </ContainerContact>
  </>);
}