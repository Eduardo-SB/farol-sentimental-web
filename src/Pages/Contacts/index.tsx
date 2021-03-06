import React from 'react';

import {ContainerContact, ChangeCard} from './style';
import {BackHome} from '../components/BackHome';

import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// modal
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import studentLuis from '../../img/students/luis.jpg';
import studentEduardo from '../../img/students/eduardo.jpeg';
import studentCleide from '../../img/students/cleide.jpg';
import studentDenia from '../../img/students/denia.jpeg';
import studentGuilherme from '../../img/students/guilherme.jpeg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 300,
    boxShadow: '2px 5px 16px 0px #333'
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
    img: studentEduardo,
    name: 'Eduardo da Silva Brandão',
    about: 'Apaixonado por tecnologia',
    linkedin: 'https://www.linkedin.com/in/eduardo-sb/',
    github: 'https://github.com/Eduardo-SB'
  })

  students.push({
    img: studentLuis,
    name: 'Luis Siczkoriz',
    about: 'Estou aberto a qualquer tipo de aprendizado.',
    linkedin: 'https://www.linkedin.com/in/luis-siczkoriz',
    github: 'https://github.com/LuisSiczkoriz'
  })
  
  students.push({
    img: studentCleide,
    name: 'Cleide de Paula',
    about: 'Analista de dados em formação, comunicadora, leitora voraz e corredora de rua nas horas vagas',
    linkedin: 'https://www.linkedin.com/in/cleide-de-paula/',
    github: 'https://github.com/clepaula/'
  })
  
  students.push({
    img: studentDenia,
    name: 'Denia ZangheliniDenia Zanghelini',
    about: '#techie #digitalshaper #datascientist #fightingbiasedcode',
    linkedin: '',
    github: 'https://github.com/DeniaZanghe'
  })
  
  students.push({
    img: studentGuilherme,
    name: 'Guilherme Lopes Martins Revolta',
    about: 'Bacharelado em Ciência da Computação.Desenvolvedor Web FullStack utilizando ferramentas atuais como React.JS, Elixir e seu framework Phoenix.',
    linkedin: 'https://www.linkedin.com/in/guirevolta/',
    github: 'https://github.com/revoltaxz'
  })

  const [open, setOpen] = React.useState(false);
  const [currentName, setCurrentName] = React.useState('');
  const [easterEgg, setEasterEgg] = React.useState(0);

  const handleClose = () => {
    setOpen(false);
    setEasterEgg(0);
  };

  return (<>
    <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Easter Egg detected</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {`Oi eu sou o ${currentName}!`}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={handleClose} color="primary">
              Fechar
            </Button> */}
            <Button onClick={handleClose} color="primary" autoFocus>
              Eu sou demais
            </Button>
          </DialogActions>
        </Dialog>
        
    <BackHome />
    <ContainerContact>
      {students.map((student: Students, index) => (
        <ChangeCard className={classes.root} key={index}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={student.img}
            title="Contemplative Reptile"
            onClick={() => {
              if(easterEgg === 5){
                setCurrentName(student.name);
                setOpen(true);
              }else{
                setEasterEgg(easterEgg + 1);
              }
            }}
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
            <a rel="noopener noreferrer" href={student.linkedin} target="_blank" style={{color: 'black', fontWeight: 'bold'}}>Linkedin</a>  
          </Button>
          <Button size="small" color="primary">
            <a rel="noopener noreferrer" href={student.github} target="_blank" style={{color: 'black',  fontWeight: 'bold'}}>Github</a> 
          </Button>
        </CardActions>
      </ChangeCard>
      ))}
    </ContainerContact>
  </>);
}