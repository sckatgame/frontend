import icon1 from '../../assets/login.png'
import icon2 from '../../assets/validate.png'

import './index.css';

export default function HeaderInfo({type,name,scorre,enable,count,setx,setCount,Obj}){

    function render(){
        if(type === 'you'){
            return(
                <div className="Header-Info You">
                    <div>
                        <button 
                            disabled={enable}
                            className="buttons"
                            onClick={
                                () =>{
                                    if(Obj.length !== 0){
                                        setx(true)
                                        setCount(20)
                                        clearInterval(window.interval)
                                    }
                                }
                            } 
                            style={{
                                width:80,
                                display:'flex',
                                alignItems:'center',
                                justifyContent:'center',
                                backgroundColor: enable ? "#006eff" : "#0f9b45"
                            }}>
                            -<img alt="" className="icon-button" src={icon2}/>{enable? 20 :count }s
                        </button>
                    </div>
                    <div className="informations">
                        <h3>{name}</h3>
                        <h3>{scorre}</h3>
                    </div>
                    <div className="image-icon icon">
                        <img alt="" style={{width:'65%',height:'70%'}} src={icon1}/>
                    </div>
                    
                </div>
            );
        }

        return(
            <div className="Header-Info">
                <div className="image-icon icon">
                    <img alt="" style={{width:'55%',height:'60%'}} src={icon2}/>
                </div>
                <div className="informations">
                    <h3>{name}</h3>
                    <h3>{scorre}</h3>
                </div>
            </div>
        );
    }

    return render();
}