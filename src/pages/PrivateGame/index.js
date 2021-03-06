import {useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import ChessBoard from 'chessboardjsx';

import typePlayer from '../../services/typePlayer';
import SelectSquare from '../../services/SelectSquare';
import RemovePicies from '../../services/RemovePicies';

import HeaderInfo from '../../componets/HeaderInfo';
import RulesComponet from '../../componets/RulesComponet';
import Loading from '../../componets/Loading';

export default function PrivateGame({client}){
    
    const [name,setName] = useState('');
    const [scorre,setScorre] = useState(1000);
    const [opt,setOpt] = useState(0);
    
    const [name2,setName2] = useState('');
    const [scorre2,setScorre2] = useState(1000);
    const [you,setyou] = useState(0);
    
    const [play,setPlay] = useState(false);
    const [code,setCode] = useState('');
    
    const [round,setRound] = useState(1);
    const [rule,setRule] = useState(0);

    const [enable,setEnable] = useState(false);
    const [x,setx] = useState(false);
    
    const [count,setCount] = useState(20);
    const [count2,setCount2] = useState(10);
    
    const [Obj,setObj] = useState([]);
    const [sclick,setSclick] = useState({});

    const [coderoom,setCodeRoom] = useState('');

    const[win,setWin] = useState('');

    const history = useHistory();

    function clear(){
        localStorage.removeItem('name');                
        localStorage.removeItem('scorre');
        localStorage.removeItem('playing');
    }

    useEffect(
        () =>{
            
            const data = {
                name:typePlayer().name,
                scorre:typePlayer().scorre,
                me:'',
                particepe:0
            }

            setName(data.name);
            setScorre(data.scorre);

            client.emit('private',
                data.name,
                data.scorre,
                window.codeRoom
            );

            client.on('privateData', res =>{
                const players = res.players;

                data.particepe = res.count;
                
                if(res.count === 2){
                    let count = 0;
                    setCode(res.code);
                    
                    players.map(
                        e =>{
                            if(e.name !== data.name){
                                setName2(e.name);
                                setScorre2(e.scorre);
                                setPlay(true)
                            }

                            if(e.name === data.name){
                                
                                if(e.vez !== 1){
                                    setEnable(true)
                                }else{
                                    data.me = e.name;
                                }

                                count += 1;
                            }
                        }
                    )

                    if(count === 2){
                        history.push('/');
                        window.location.reload();
                        clear();
                    }
                    
                    init(data.me,data.name,1);
                    
                }else{
                    setCodeRoom(res.coderoom);
                }
            })

            client.on('updateRoom', res =>{
                
                if(res.name && !res.data){
                    if(res.name === data.name){
                        alert('Voc?? ganhou')
                    }else{
                        alert('Voc?? perdeu')
                    }
                    
                    client.disconnect();
                    history.push('/');
                    window.location.reload();
                    clear();
                }

                if(res.round){
                    if(res.name === data.name){
                        let newYou = you+1
                        setyou(newYou)
                    }else{
                        let newOpt = opt+1
                        setOpt(newOpt)
                    }
                    
                    setWin(res.name)
                    setRound(res.round)

                    if(res.round === 2){
                        setCode(res.code);
                        setSclick({});
                        setObj([]);
                        
                        res.data.map(
                            e =>{
                                if(client.id === e.id){
                                    if(e.vez === 1){
                                        data.me = data.name;
                                        setEnable(false);
                                    }else{
                                        data.me = '';
                                        setEnable(true);
                                    }
                                }
                            }
                        );
                        
                        return init(data.me,data.name,2);
                    }

                    if(res.round === 3){
                        setCode(res.code);
                        setSclick({});
                        setObj([]);
                        setRule(res.rule)
                        
                        res.data.map(
                            e =>{
                                if(client.id === e.id){
                                    if(e.vez === 1){
                                        data.me = data.name;
                                        setEnable(false);
                                    }else{
                                        data.me = '';
                                        setEnable(true);
                                    }
                                }
                            }
                        );
                        
                        return init(data.me,data.name,3,res.rule);
                    }

                }

                let validate = false

                setCode(res.code);
                setSclick({});
                setObj([]);

                res.data.map(
                    e =>{
                        if(client.id === e.id){
                            if(e.vez === 0){
                                setEnable(true)
                            }else{
                                setEnable(false)
                                validate = true;
                            }
                        }
                    }
                )

                if(validate){

                    let newCount = 20

                    window.interval = setInterval(() => {
                        
                        if(newCount === 0){
                            newCount = 20;
                            setx(true)
                            setCount(newCount)
                            clearInterval(window.interval);
                        }else{
                            newCount-- ;
                            setCount(newCount)
                        }
                        
                    }, 1000);
                }

            })

            client.on('over',(res) =>{
                if(res){
                    if(res.name === data.name){
                        alert('Voc?? ganhou')
                    }else{
                        alert('Voc?? perdeu')
                    }
                }
                client.disconnect();
                history.push('/');
                window.location.reload();
                clear();
            })

            window.addEventListener('popstate', () =>{
                if(data){
                    if(data.particepe === 2){
                        client.emit('over');
                    }else{
                        client.disconnect();
                        history.push('/');
                        window.location.reload();
                        clear();
                    }
                }
            });
        },[]
    )

    function init(vez,name,round,rest){
        let c = 10;

        let interval = setInterval(() => {
            if(c === 0){
                clearInterval(interval)
                rest ? setRound(`${round} - ${rest}`) : setRound(`${round}`)
                setCount2(10)
                if(vez === name){
                    let newCount = 20
                    
                    window.interval = setInterval(() => {
                        
                        if(newCount === 0){
                            newCount = 20;
                            setx(true)
                            setCount(newCount)
                            clearInterval(window.interval);
                        }else{
                            newCount-- ;
                            setCount(newCount)
                        }
                        
                    }, 1000);
                }
            }else{
                c--
                setCount2(c)
            }
        }, 1000);
    }


    function render(){
        
        function rules(){

            if(round != 1 && round != 2){
                let text = rule === 1 ? 
                'Retirar a(s) ??ltima(s) pe??a(s)' : 
                'Deixar a ??ltima pe??a no tabuleiro'

                return text
            }else{
                let text2 = round == 1 ? 
                'Retirar a(s) ??ltima(s) pe??a(s)' : 
                'Deixar a ??ltima pe??a no tabuleiro'
                
                return text2
            }
        }

        if(x){
            if(Obj.length === 0){
                client.emit('over');
            }else{
                client.emit('updateRoom',RemovePicies(Obj,code));
            }
            setx(false)
        }
        if(play){

            if(round === 1 || round === 2){
                let text_rule = round === 1 ? 
                'Retirar a(s) ??ltima(s) pe??a(s)' : 
                'Deixar a ??ltima pe??a no tabuleiro'

                return <RulesComponet 
                        player1={name}
                        player2={name2}
                        rule={text_rule}
                        round={round}
                        con={count2}
                        win={win}
                        you={name}
                    />
            }

            if(round === 3){
                let text_rule = rule === 1 ? 
                'Retirar a(s) ??ltima(s) pe??a(s)' : 
                'Deixar a ??ltima pe??a no tabuleiro'

                return <RulesComponet 
                    player1={name}
                    player2={name2}
                    rule={text_rule}
                    round={round}
                    con={count2}
                    win={win}
                    you={name}
                />
            }

            return(
                <div className="conteiner-game">
                    
                    <h2>Round {round}</h2>
                    <h3>Objetivo: {rules()}</h3>
                    
                    <div className="placar">
                        <h3>Voc??: {you}</h3>
                        <h3>Oponente: {opt}</h3>
                    </div>
                    
                    <HeaderInfo 
                        type="opnet" 
                        name={name2} 
                        scorre={scorre2}
                    />
                    
                    <div className="chessboard">
                        <ChessBoard
                            width="350"
                            position={code}
                            squareStyles={sclick}
                            draggable={false}
                            onSquareClick={
                                e =>{
                                    if(!enable){

                                        const element = Obj.find(el => el === e);

                                        if(Obj.length === 0){
                                            
                                            if(SelectSquare(e,code,sclick,setSclick)){
                                                setObj([e])
                                            }
                                            return;
                                        }
                                        
                                        if(element){
                                            const data = Obj.filter(el => el !== e)
                                            SelectSquare(e,code,sclick,setSclick)
                                            setObj(data)
                                            return;
                                        }
                                        
                                        if(Obj[0][1] === e[1]){
                                            if(SelectSquare(e,code,sclick,setSclick)){
                                                setObj([...Obj,e]);
                                            }
                                            return;
                                        }

                                        return;

                                    }else{
                                        return alert('N??o ?? sua vez')
                                    }
                                }
                            }
                            lightSquareStyle={{ backgroundColor: "AliceBlue" }}
                            darkSquareStyle={{ backgroundColor: "CornFlowerBlue" }}
                        />
                    </div>
                    
                    <HeaderInfo 
                        enable={enable} 
                        type="you" 
                        name={name} 
                        scorre={scorre}
                        count={count}
                        setx={setx}
                        setCount={setCount}
                        Obj={Obj}
                    />
                    <br/>
                    <p># Clique no bot??o para remover as pe??as</p>
                </div>
            );
        }

        return <Loading
            codigo={coderoom}
        />
    }


    return render();
}