import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import PrivateRouter from "./componets/PrivateRouter";

import Logon from './pages/Logon';
import Forgot from './pages/Forgot';
import Profil from "./pages/Profil";

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <PrivateRouter path="/profil" component={Profil}/>
                <Route path="/:validate" component={Forgot}/>
            </Switch>
        </BrowserRouter>
    );
}