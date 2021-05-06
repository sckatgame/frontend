import {Route, Redirect} from 'react-router-dom'
import isLogin from '../../services/isLogin'

export default function PrivateRouter({topath,component: Component, ...rest}){
    return <Route {...rest}
        render={
            props => 
                isLogin() ? 
                <Component {...props} /> :
                <Redirect to={topath}/>
        }
    />
}