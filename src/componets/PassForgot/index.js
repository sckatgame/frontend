import {useState} from 'react';
import forgot from '../../assets/forgot.png';
import api from '../../services/api'

export default function PassForgot(){

    const [email,setEmail] = useState('');
    const [text,setText] = useState('Enviar senha');
    const [desable,setDesable] = useState(false);

    async function hanldeForgot(e){
        e.preventDefault();

        setText('Aguarde...')
        setDesable(true);

        try{
            const response = await api.post('password',{email});
            setText('Senha Enviada');
            alert(response.data.sucess);

        }catch(err){
            const {data} = err.response
            
            if(!data.error){
                alert('Formato de email inválido')
            }else{
                alert(data.error)
            }

            setText('Enviar senha')
            setDesable(false)
        }

    }

    return(
        <section className="content">
            <div className="image-icon">
                <img alt="" style={{width:'55%',height:'60%'}} src={forgot}/>
            </div>
            <form className="form" onSubmit={hanldeForgot}>
                <input 
                    required
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                />
                
                <div className="buttons-actions">
                    <button disabled={desable} className="buttons" style={{width:150}} type="submit">{text}</button>
                </div>
            </form>
        </section>
    );
}