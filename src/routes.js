import { BrowserRouter, Switch } from "react-router-dom";
import PrivateRouter from "./componets/PrivateRouter";
import PublicRoute from "./componets/PublicRoute";
import GameRouter from "./componets/GameRouter";
import { io } from "socket.io-client";

import Logon from './pages/Logon';
import Forgot from './pages/Forgot';
import Profil from "./pages/Profil";
import Rules from "./pages/Rules";
import Admin from "./pages/Admin";
import Game from "./pages/Game";
import PrivateGame from "./pages/PrivateGame";

const client = io('https://backend-sckatgame.herokuapp.com/',{transports:['websocket']});

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <PublicRoute path="/" exact component={Logon}/>
                <PrivateRouter topath="/" path="/profil" component={Profil} client={client}/>
                <PublicRoute path="/admin" component={Admin}/>
                
                <GameRouter path="/game" topath="/" component={Game} client={client}/>
                <GameRouter path="/private-game" topath="/" component={PrivateGame} client={client}/>
                
                <PublicRoute path="/rules" component={Rules}/>
                <PublicRoute path="/:validate" component={Forgot}/>
            </Switch>
        </BrowserRouter>
    );
}