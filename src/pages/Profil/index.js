import {useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';

import api from '../../services/api';
import HeaderProfile from '../../componets/HeaderProfile';
import TableScorre from '../../componets/TableScorre';
import GameModels from '../../componets/GameModels';
import './index.css';

export default function Profil({client}){

    const history = useHistory();

    const token = localStorage.getItem('token');
    const [name,setName] = useState('');
    const [scorre,setScorre] = useState('');
    const [data, setData] = useState([]);
    const [onlines, setOnlines] = useState([]);


    useEffect(() =>{
        async function fetchData() {
            try{
    
                const {data} = await api.get('profile',{
                    headers:{Authorization : token }
                })
    
                const [user] = data.dataUser;

                setData(data.topfive)
                setName(user.name)
                setScorre(user.scorre)
    
                localStorage.setItem('name',user.name)
                localStorage.setItem('scorre',user.scorre)
    
                client.emit('init',
                    user.name,
                    user.scorre
                );
    
                client.on('init',data =>{
                    setOnlines(data);
                })
                
                client.on('update',data =>{
                    setOnlines(data);
                })
    
            }catch(err){
                localStorage.clear();
                history.push('/');
            }

            return;
        }
        fetchData();

    },[token]);

    return (
        <div className="Profile">
            
            <HeaderProfile
                name={name}
                scorre={scorre}
                client={client}
            />

            <GameModels
                client={client}
            />

            <section className="Tables">    
                <TableScorre
                    topFive={data}
                    title="Top Sckat Players"
                />
                <TableScorre
                    topFive={onlines}
                    title="Top Online Players"
                />
            </section>
        </div>
    );
}