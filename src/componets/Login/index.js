import {useState} from 'react'
import api from '../../services/api';
import logup from '../../assets/logup.png';
import {Link, useHistory} from "react-router-dom"

export default function Login(){

    const history = useHistory();

    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');

    const [text,setText] = useState('Entrar');
    const [desable,setDesable] = useState(false);

    async function handleRegister(e){
        e.preventDefault();

        setText('Aguarde...')
        setDesable(true);

        try{

            const {data} = await api.post('session',{
                email,
                password:senha
            });

            localStorage.setItem('token', data.authorization);
            history.push('/profil')

        }catch(err){
            const {data} = err.response
            
            if(!data.error){
                alert('Algo deu errado, tente novamente')
            }else{
                alert(data.error)
            }

            setText('Entrar')
            setDesable(false)
        }

    }

    return(
    <>
        
        <div className="image-icon">
            <img alt="" src={logup}/>
        </div>
        <form className="form" onSubmit={handleRegister}>
            <input 
                required
                placeholder="Email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)} 
            />
            
            <input 
                required
                placeholder="Senha" 
                type="password"
                minLength="8"
                value={senha}
                onChange={e => setSenha(e.target.value)} 
            />

            <div className="buttons-actions">
                <button disabled={desable}  className="buttons" style={{width:90}}>{text}</button>
            </div>
            <div className="Link">
                <Link style={{textDecoration:'none'}}  to='/email'><p>Esqueci minha senha</p></Link>
            </div>
        </form>
        
    </>
    );
}