export default function isLogin(){
    const getLocal = localStorage.getItem('playing')

    if(!getLocal){
        return false
    }

    return true
}