import './index.css'

export default function Header(){
    return(
        <div className="Header">
            <h1>Sckat Game</h1>
            <div>
                <button className="buttons" style={{width:90}}>Regras</button>
                <button className="buttons" style={{width:110}}>Jogar agora</button>
            </div>
        </div>
    )
}