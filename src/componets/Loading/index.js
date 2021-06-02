import loading from '../../assets/loading.gif'
import './index.css';

export default function Loading({codigo}){

    function renderCode(){
        if(codigo){
            return (
                <h3>Código da Sala : {codigo}</h3>
            );
        }

        return ;
    }

    return(
        <div className="conteiner-loading">
            <div className="Header">
                <h1>Sckat Game</h1>
            </div>
            <div className="awaiting">
                <h2>Aguardando oponente...</h2>
                {renderCode()}
                <img alt="" src={loading}/>
            </div>
        </div>
    );
}