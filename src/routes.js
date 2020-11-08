import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

//Pages
import { Home } from './Pages/Home';
import { Results } from './Pages/Results';
import { About } from './Pages/About';
import { Contacts } from './Pages/Contacts';
import { NotFound } from './Pages/NotFound';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/inicio" component={Home} />
                <Route path="/resultado"  component={Results} />
                <Route path="/sobre"  component={About} />
                <Route path="/contato"  component={Contacts} />

                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}