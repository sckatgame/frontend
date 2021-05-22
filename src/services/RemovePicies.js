import genereteFen from "./genereteFen";

export default function RemovePicies(array=[],code=''){

    const list_square = code.split(' w')[0].split('/');
    const words = {a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7}

    const line = 8 - array[0][1];
    const code_string = list_square[line].split('');

    const newLine = code_string.map(
        (e,i) =>{
            for (let index = 0; index < array.length; index++) {
                if(i === words[array[index][0]]){
                    return 1
                }
            }

            return e
        }
    )

    let message = ''

    newLine.map(
        e =>{
            return message += e
        }
    )

    list_square[line] = message

    return genereteFen(list_square)
}