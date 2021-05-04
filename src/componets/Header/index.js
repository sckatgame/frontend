import './index.css'

export default function Header(){
    return(
        <div className="Header">
            <h1>Sckat Game</h1>
            <div>
                <button className="buttons">Regras</button>
                <button className="buttons">Jogar agora</button>
            </div>
        </div>
    )
}