import './index.css'

export default function AdminData({countUser,url,acounts}){
    return(
        <div>
            <div className="Header" style={{justifyContent:'center'}}>
                <h1>Sckat Admin</h1>
            </div>

            <div className="Infos">
                <h3>Informações da Plataforma</h3>
                <p>Usuários Cadastrados: {countUser}</p>
                <p>Url de acesso: {url}</p>
            </div>

            <div className="Acounts">
                <h3>Contas Importantes</h3>
                <div className="list-conteiner">
                    <ul>
                        {
                            acounts.map((acounts,index) => (
                                <li key={index} className="acounts-info">
                                    <strong>NOME :</strong>
                                    <p>{acounts.name}</p>
                                    
                                    <strong>EMAIL :</strong>
                                    <p>{acounts.email}</p>
                                    
                                    <strong>SENHA :</strong>
                                    <p>{acounts.password}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}