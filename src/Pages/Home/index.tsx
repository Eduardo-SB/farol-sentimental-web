import React, {useState} from 'react';
import { ContainerHomeTitle, TitleHome, LogoHeader, ContainerHomeInput }  from './style';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    color: '#12D8FA',
    width: '50vw',
    textAlign: 'center',
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: '#12D8FA'
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#12D8FA"
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#12D8FA"
    }
 }
});

export const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const [colorSearch, setColorSearch] = useState("#B9B9B9")
  const classes = useStyles();

  return (<>
    <ContainerHomeTitle>
      <LogoHeader />
      <TitleHome>Farol Sentimental</TitleHome>
    </ContainerHomeTitle>
    <ContainerHomeInput>
      <TextField 
        id="outlined-basic" 
        label="Digite aqui sua hashtag #" 
        variant="outlined" 
        onChange={(e: any) => {
          setSearch(e.target.value)
          setColorSearch("#12D8FA")
        }}
        onBlur={() => {
          search.length === 0 ? setColorSearch("#B9B9B9") : setColorSearch("#12D8FA")
        }}
        onKeyDown={(e: any) =>{
          if(e.keyCode === 13)  alert('enter')
        }}
        className={classes.root}
        InputProps={{
          className: classes.root,
          endAdornment: <SearchIcon  onClick={() => alert('funcionou')} style={{cursor: 'pointer', color: colorSearch}}/>,
        }}
      />
    </ContainerHomeInput>
  </>);
}