import {useHistory} from 'react-router-dom'

import LogUp from '../../assets/login.png'
import './index.css'

export default function HeaderProfile({name,scorre,client}){

    const history = useHistory();

    function handleQuit(){
        client.disconnect();
        localStorage.clear()
        history.push('/');
        window.location.reload();
    }

    return (
        <header className="content-info">
            <div className="Profile-header">    
                <div className="image-icon">
                    <img alt="" src={LogUp}/>
                </div>
                
                <div className="Profile-info">
                    <h2>{name}</h2>
                    <h2>{scorre}</h2>
                </div>
            </div>
            
            <div className="btn-quit">
                <button className="buttons" onClick={handleQuit}>Sair</button>
            </div>
        </header>
    );
}