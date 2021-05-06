export default function isLogin(){
    const getLocal = localStorage.getItem('token')

    if(!getLocal){
        return false
    }

    return true
}