import {Route, Redirect} from 'react-router-dom'
import isLogin from '../../services/isLogin'

export default function PrivateRouter({client,topath,component: Component, ...rest}){
    return <Route {...rest}
        render={
            props => 
                isLogin() ? 
                <Component {...props} client={client}/> :
                <Redirect to={topath}/>
        }
    />
}