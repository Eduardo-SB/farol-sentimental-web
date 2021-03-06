import React from 'react';
import { Route, Switch} from 'react-router-dom';

//Pages
import { Home } from './Pages/Home';
import { Results } from './Pages/Results';
import { About } from './Pages/About';
import { Contacts } from './Pages/Contacts';
import { NotFound } from './Pages/NotFound';

export default function Routes(){
    return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/inicio" component={Home} />
                <Route path="/resultado/:hashtag"  component={Results} />
                <Route path="/sobre"  component={About} />
                <Route path="/contato"  component={Contacts} />

                <Route component={NotFound} />
            </Switch>
    );
}