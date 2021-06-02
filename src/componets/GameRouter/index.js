import {Route, Redirect} from 'react-router-dom'
import isPlaying from '../../services/isPlaying'

export default function GameRouter({client,topath,component: Component, ...rest}){
    return <Route {...rest}
        render={
            props => 
                isPlaying() ? 
                <Component {...props} client={client}/> :
                <Redirect to={topath}/>
        }
    />
}