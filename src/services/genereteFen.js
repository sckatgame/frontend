export default function genereteFen(array){
    
    const final_string = ' w -- 0 0'
    let fen_code = ''

    array.map(
        (element,index) =>{
            if(array.length -1 === index){
                return fen_code += element
            }else{
                return fen_code += element+'/'
            }
        }
    )

    fen_code += final_string;

    return fen_code;
}