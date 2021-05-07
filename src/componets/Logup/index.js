import {useState} from 'react'
import login from '../../assets/login.png';
import api from '../../services/api'
import {useHistory} from 'react-router-dom'

export default function Logup(){

    const history = useHistory();

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    
    const [text,setText] = useState('Cadastrar');
    const [desable,setDesable] = useState(false);

    async function handleRegister(e){
        e.preventDefault();

        setText('Aguarde...')
        setDesable(true);

        try{
            await api.post('user',{
                name,
                email,
                password:senha
            });

            history.push(`/validate?email=${email}`)

        }catch(err){
            const {data} = err.response
            
            if(!data.error){
                alert('Algo deu errado, tente novamente')
            }else{
                alert(data.error)
            }

            setText('Cadastrar')
            setDesable(false)
        }

    }

    return(
        <>
            <div className="image-icon">
                <img alt="" src={login}/>
            </div>
            
            <form className="form" onSubmit={handleRegister}>
                
                <input 
                    required
                    placeholder="Nome de Usuário"
                    maxLength="14"
                    value={name}
                    onChange={e => setName(e.target.value)} 
                />
                
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
                    <button disabled={desable} className="buttons" style={{width:90}}>{text}</button>
                </div>
                
            </form>
        </>
    );
}