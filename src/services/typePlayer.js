import randomName from "./randomName";

export default function typePlayer(){
    const name = localStorage.getItem('name');
    const scorre = localStorage.getItem('scorre');

    if(name && scorre){
        return {
            name,
            scorre
        }
    }

    return randomName();

}