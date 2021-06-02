import './index.css'

export default function RulesComponet({round = 1,player1,player2,rule,con = 5,you = 0,opt = 0}){
    return(
        <div className="conteiner">
            
            <div className="conteiner-data">
                <h2>Round {round}</h2>

                <div className="conteiner-rules">
                    <h3># Vence o jodador que: <br/>{rule}</h3>
                </div>

                <div className="conteiner-placa">
                    <div className="conteiner-info">
                        <h3>{player1}</h3> <h3> Vitorias: {you}</h3>
                    </div>
                    <h2>X</h2>
                    <div className="conteiner-info">
                        <h3>{player2}</h3> <h3> Vitorias: {opt}</h3>
                    </div>
                </div>
                <div className="count">
                    <h3># Início em: {con}s</h3>
                </div>
            </div>
        
        </div>
    )
}