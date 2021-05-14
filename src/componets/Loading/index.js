import loading from '../../assets/loading.gif'
import './index.css';

export default function Loading(){
    return(
        <div className="conteiner-loading">
            <div className="Header">
                <h1>Sckat Game</h1>
            </div>
            <div className="awaiting">
                <h2>Aguardando oponente...</h2>
                <img alt="" src={loading}/>
            </div>
        </div>
    );
}