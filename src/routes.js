import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRouter from "./componets/PrivateRouter";
import PublicRoute from "./componets/PublicRoute";
import { io } from "socket.io-client";

import Logon from './pages/Logon';
import Forgot from './pages/Forgot';
import Profil from "./pages/Profil";
import Rules from "./pages/Rules";
import Admin from "./pages/Admin";
import Game from "./pages/Game";

const client = io('http://192.168.3.8:4000',{transports:['websocket']});

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <PublicRoute path="/" exact component={Logon}/>
                <PrivateRouter topath="/" path="/profil" component={Profil} client={client}/>
                <PublicRoute path="/admin" component={Admin}/>
                <Route path="/game" component={Game}/>
                <PublicRoute path="/rules" component={Rules}/>
                <PublicRoute path="/:validate" component={Forgot}/>
            </Switch>
        </BrowserRouter>
    );
}