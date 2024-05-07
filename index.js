let cargador = 7;
let disparo = 0;

function chauchat(cargador){
    for (let i = 0; i < cargador; i++){
    let probabilidad = Math.random()*100;
        if (probabilidad > 80){
            console.log('pium!');
        } if (disparo % 3 === 0){
            console.log(' ');
        } else {
            console.log('illo, que me he quedao pillá!');
        }
    }
}
chauchat(cargador);