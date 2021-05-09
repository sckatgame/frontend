import {useState} from 'react';

import Admin_icon from '../../assets/admin.ico';
import AdminData from '../../componets/AdminData';
import api from '../../services/api';
import './index.css';

export default function Admin(){

    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [data,setData] = useState({});

    const [text,setText] = useState('Entrar');
    const [desable,setDesable] = useState(false);
    const [controll,setControll] = useState(false);

    async function handleAdmin(e){
        e.preventDefault();

        setText('Aguarde...')
        setDesable(true);

        try{

            const {data} = await api.post('users',{
                email,
                password:senha
            });

            setData(data);
            setControll(true);

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


    function render(){

        if(controll){
            return(
                <AdminData
                    acounts={data.acounts}
                    url={data.url}
                    countUser={data.countUser}
                />
            );
        }else{
            return(
                <>
                    <div className="Header" style={{justifyContent:'center'}}>
                        <h1 className="title">Sckat Admin</h1>
                    </div>
                    
                    <div className="Content-Admin">
                        <div className="image-icon">
                            <img alt="" src={Admin_icon}/>
                        </div>
                
                        <form 
                            onSubmit={handleAdmin}
                            className="form" 
                            style={{justifyContent:'center'}}>
                    
                            <input
                                required
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={ e => setEmail(e.target.value)}
                            />
            
                            <input
                                required
                                placeholder="Senha" 
                                type="password"
                                minLength="8" 
                                value={senha}
                                onChange={ e => setSenha(e.target.value)}
                            />

                            <div className="buttons-actions">
                                <button 
                                    disabled={desable}
                                    className="buttons"
                                    style={{width:90}}>{text}</button>
                            </div>
                        </form>
                    </div>
                </>
            );
        }

    }

    return (
        <div className="body">
            {
                render()
            }
        </div>
    );
}