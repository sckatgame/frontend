export default function randomName(){
    let name = 'Guest_';
    const hash1 = parseInt(Math.random() * (999 - 100) + 100);
    const hash2 = parseInt(Math.random() * (999 - 100) + 100);
    const hash3 = parseInt(Math.random() * (9 - 1) + 1);

    name += hash1*hash2*hash3;

    return {
        name,
        scorre:'Convidado'
    }
}