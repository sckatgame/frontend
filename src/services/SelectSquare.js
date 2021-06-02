export default function SelectSquare(e,code,sclick,setSclick){
    const list_square = code.split(' w')[0].split('/');
    const word_line = e.split('');
    
    const words = {a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7}

    let item = list_square[8-word_line[1]][words[word_line[0]]];
    
    if(!item || !isNaN(item)){
        return false;
    }else{
        if(!sclick[e]){
            const data = {
                ...sclick,
                [e]:{
                    backgroundColor:'#00ff78'
                }
            }
            
            setSclick(data);
        }else{
            const data = sclick;
            delete data[e];
            setSclick(data)
        }
    }
    return true;
}