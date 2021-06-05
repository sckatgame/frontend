import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import validate from '../../assets/validate.png';
import api from '../../services/api'

export default function Validate({email}){

    const history = useHistory();

    const [validate_code,setValidate] = useState('');
    const [desable,setDesable] = useState(false);
    const [text,setText] = useState('Confirmar email');


    async function handleValidate(e){
        e.preventDefault();
        
        setDesable(true);
        setText('Aguarde...')

        try{
            const {data} = await api.post('validate',{code:validate_code,email});
            localStorage.setItem('token', data.authorization);
            history.push('/profil');
            

        }catch(err){
            const {data} = err.response
            
            if(!data.error){
                alert('Email ou código inválido')
            }else{
                alert(data.error)
            }

            setText('Confirmar email');
            setDesable(false);
        }
    }

    return (
        <section className="content">
            <div className="image-icon">
                <img alt="" style={{width:'55%',height:'60%'}} src={validate}/>
            </div>
            
            <form className="form" onSubmit={handleValidate}>
                
                <label>{email}</label>
                
                <input
                    minLength="4"
                    maxLength="4" 
                    required
                    placeholder="código"
                    type="text"
                    value={validate_code}
                    onChange={e => setValidate(e.target.value)} 
                />
                
                <div className="buttons-actions">
                    <button disabled={desable} className="buttons" style={{width:150}} type="submit">{text}</button>
                </div>
                <br/>
                <br/>
                <p># Verifique sua caixa de spam,<br/> caso não tenha recebido ainda</p>
            </form>        
        </section>
    );
}