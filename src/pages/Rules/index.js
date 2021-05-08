import './index.css'

import {useHistory} from 'react-router-dom'

export default function Rules(){
    
    const history = useHistory();

    return (
        <div>
            <div className="Header">
                <h1>Sckat Game</h1>
                <div>
                    <button 
                        className="buttons" 
                        style={{width:70}}
                        onClick={
                            () => history.push('/')
                        }
                    >Voltar</button>
                </div>
            </div>
            <div className="text-body">
                <p>Cada partida é composta por dois turnos com objetivos diferentes e mais um turno adcional em caso de empate.</p>
                <p>No primeiro turno um tabuleiro aleatório é formado e o mesmo é repetido no turno 2, caso haja necessidade de um turno de desempate um novo tabuleiro aleatório será gerado.</p>
                <br></br>

                <h2>Movimentos :</h2>
                <br></br>
                <p>Cada jogador poderá, por jogada, remover uma ou mais peças do tabuleiro contanto que ESTEJAM NA MESMA FILEIRA.</p>
                <p>Ou seja, você pode em um lance remover uma, duas ou quantas peças você desejar desde que estejam na mesma linha horizontal.</p>
                <p>Com isso, peças de fileiras diferentes não poderão ser selecionadas para remoção.</p>
                <p>Cada movimento terá um cronômetro regressivo que limitará seu tempo de jogada. Se o tempo acabar, caso não clique na opção de "confirmar" as peças selecionadas para remoção, o jogo removerá o que ja foi maracado pelo jogador, caso não haja peça selecionada o jogador perde aquele turno.</p>
                <br></br>

                <h2>Objetivo :</h2>
                <br></br>
                <p>Turno 1: Vence aquele que retirar a(s) última(s) peça(s) do tabuleiro.</p>
                <p>Turno 2: Vence aquele que deixar a última peça para seu oponente.</p>
                <p>Turno 3 ( Caso haja empate ): Um dos dois objetivos acima será sorteado para ser a regra deste turno.</p>

            </div>

        </div>
    );   
}