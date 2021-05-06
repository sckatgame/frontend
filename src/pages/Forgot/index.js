import {Link} from 'react-router-dom';
import './index.css'
import Validate from '../../componets/Validate';
import PassForgot from '../../componets/PassForgot';

export default function Forgot({match,location}){

    const path = match.params.validate;
    const query = location.search.split('=');

    
    function render(){
        if(path === 'email'){
            return <PassForgot/>
        }

        if(path === 'validate' && query[0] === '?email'){
            return <Validate email={query[1]}/>
        }
        
        return (
            <section className="content" >
                <h2>Ops! Algo deu errado...</h2>
            </section>
        );
    }

    return(
        <>
            <header className="Header">
                <h1>Sckat Game</h1>
                <div>
                    <Link to="/">
                        <button className="buttons" style={{width:70}}>Voltar</button>
                    </Link>
                </div>
            </header>
            {render()}
        </>
    )
}