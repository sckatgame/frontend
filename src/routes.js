import { BrowserRouter, Switch } from "react-router-dom";
import PrivateRouter from "./componets/PrivateRouter";
import PublicRoute from "./componets/PublicRoute";

import Logon from './pages/Logon';
import Forgot from './pages/Forgot';
import Profil from "./pages/Profil";
import Rules from "./pages/Rules";

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <PublicRoute path="/" exact component={Logon}/>
                <PrivateRouter topath="/" path="/profil" component={Profil}/>
                <PublicRoute path="/rules" component={Rules}/>
                <PublicRoute path="/:validate" component={Forgot}/>
            </Switch>
        </BrowserRouter>
    );
}