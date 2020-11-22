import React, { useContext} from 'react';
import {Link} from 'react-router-dom';
import {ThemeContext} from 'styled-components';

import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Switch, { SwitchClassKey, SwitchProps } from '@material-ui/core/Switch';
import {Brightness2, WbSunny} from "@material-ui/icons";

import {HeaderContainer, OptionsHeader, DarkModeOptions} from './style';

interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}

interface Props extends SwitchProps {
  classes: Styles;
}

interface PropsComponent{
  toggleTheme?() : void;
}

const SwitchDarkMode = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#4DBBEB',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#4DBBEB',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }),
)(({ classes, ...props }: Props) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export const Header: React.FC<PropsComponent> = ({toggleTheme}) => {
  const { title } = useContext(ThemeContext)
  
  return (
  <HeaderContainer> 
    <DarkModeOptions>
        <WbSunny fontSize="small" style={{margin: '30px 5px'}}/>
        <SwitchDarkMode checked={title === 'dark'} onChange={toggleTheme} name="switchDarkMode" />
        <Brightness2 fontSize="small" />
    </DarkModeOptions>
    <div>
      <OptionsHeader>
        <Link to="/contato">Contato</Link>
      </OptionsHeader>
      <OptionsHeader>
        <Link to="/sobre">Sobre</Link>
      </OptionsHeader>
    </div>

  </HeaderContainer>
  );
}