import winner from '../../assets/win.png'
import loser from '../../assets/lose.webp'

import './index.css'

export default function RulesComponet({round = 1,player1,player2,rule,con = 5,win,you}){
    
    function renderWin(){
        if(!win){
            return(
                <div className="conteiner-placa">
                    <div className="conteiner-info">
                        <h3>{player1}</h3>
                    </div>
                    <h2>X</h2>
                    <div className="conteiner-info">
                        <h3>{player2}</h3>
                    </div>
                </div>
            )
        }else{
            if(win === you){
                return(
                    <div className="conteiner-placa">
                        <img alt="" src={winner}/>
                        <br/>
                        <h3>Parabéns!!!<br/>Vc ganhou o round anterior</h3>
                    </div>
                )
            }else{
                return (
                    <div className="conteiner-placa">
                        <img alt="" src={loser}/>
                        <br/>
                        <h3>Que pena!!!<br/>Vc perdeu o round anterior</h3>
                    </div>
                )
            }
        }
    }
    
    return(
        <div className="conteiner">
            
            <div className="conteiner-data">
                <h2>Round {round}</h2>

                <div className="conteiner-rules">
                    <h3># Vence o jodador que: <br/>{rule}</h3>
                </div>
                {renderWin()}
                <div className="count">
                    <h3># Início em: {con}s</h3>
                </div>
            </div>
        
        </div>
    )
}