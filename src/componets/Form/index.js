import { useState } from "react";
import './index.css'
import Logup from '../Logup'
import Login from '../Login'

export default function Form(){

    const [login,setLogin] = useState(false);
    const [text,setText] = useState('Já possui uma conta? Entrar');

    function change(type,text){
        setLogin(type)
        setText(text)
    }

    return (
        <section className="content">
            {
                login ? <Login/>: <Logup/>
            }
            <div className="Link">
                <p onClick={() => login ? change(false,'Já possui uma conta? Entrar') : change(true,'Ainda não possui conta? Registrar-se')}>{text}</p>
            </div>
        </section>

    );
}