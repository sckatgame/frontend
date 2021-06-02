import {useState,useEffect} from 'react'

import {useHistory} from 'react-router-dom'

export default function GameModels({client}){

    const [codeRoom,setCodeRoom] = useState('');
    const [message,setMessage] = useState('');

    const history = useHistory();

    useEffect(
        () =>{
            client.on('resolve', validate =>{
                if(validate){
                    localStorage.setItem('playing','hey')
                    history.push('/private-game')
                }else{
                    setMessage('Sala cheia ou código inválido');
                }
            })
        },[]
    );

    function handleSeach(e){
        e.preventDefault();
        client.emit('seachRoom',codeRoom)
        window.codeRoom = codeRoom;
    }


    return(
        <section className="btn-content">
            <h3 style={{color:'#be1914'}}>{message}</h3>
            <form onSubmit={handleSeach}>
                <input
                    required
                    value={codeRoom}
                    onChange={
                        e => {
                            setCodeRoom(e.target.value)
                            setMessage('')
                        }
                    }
                    placeholder="Código da Sala"
                    maxLength="5"
                    minLength="5"
                />
                
                <button className="buttons" style={{width:70}}>Entrar</button>
            </form>
            
            <div className="btn-actions">
                <div>
                    <button className="buttons" style={{width:90}} onClick ={
                        () =>{
                            window.codeRoom = ""
                            localStorage.setItem('playing','hey')
                            history.push('/private-game')
                        }
                    }>Criar Sala</button>
                </div>
                
                <div>
                    <button className="buttons" style={{width:110}} onClick ={
                        () =>{
                            localStorage.setItem('playing','hey')
                            history.push('/game')
                        }
                    }>Jogar Agora</button>
                </div>
            </div>
        </section>
    );
}