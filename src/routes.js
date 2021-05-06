import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from './pages/Logon';
import Forgot from './pages/Forgot';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/:validate" component={Forgot}/>
            </Switch>
        </BrowserRouter>
    );
}