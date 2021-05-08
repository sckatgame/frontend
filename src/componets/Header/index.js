import './index.css'

import {useHistory} from 'react-router-dom'

export default function Header(){
    
    const history = useHistory();

    return(
        <div className="Header">
            <h1>Sckat Game</h1>
            <div>
                <button className="buttons" style={{width:90}} onClick={
                    () =>{
                        history.push('/rules')
                    }
                } >Regras</button>
                <button className="buttons" style={{width:110}}>Jogar agora</button>
            </div>
        </div>
    )
}