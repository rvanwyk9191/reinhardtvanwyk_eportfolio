import React from 'react';
import '../App.css';
import {Route, Switch} from "react-router-dom";
import Bio from "../content/Bio";
import Resume from "../content/Resume";
import Java from "../content/Java";
import Javascript from "../content/Javascript";

function RouterSwitch(){
    return (
        <Switch>
            <Route exact path={'/'} render={Bio}/>
            <Route exact path={'/resume'}><Resume/></Route>
            <Route exact path={'/java'} render={Java}/>
            <Route exact path={'/javascript'} render={Javascript}/>
        </Switch>
    );
}

export default RouterSwitch;