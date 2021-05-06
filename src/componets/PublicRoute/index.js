import {Route, Redirect} from 'react-router-dom'
import isLogin from '../../services/isLogin'

export default function PublicRoute({component: Component, ...rest}){
    return <Route {...rest}
        render={
            props => 
                isLogin() ? 
                <Redirect to="/profil"/>:
                <Component {...props} /> 
        }
    />
}