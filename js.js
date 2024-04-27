let co = 0;

function move(our){
    const rand = Math.random();
    let cm = '';

    if(rand >= 0 && rand <= 1/3){
        cm = 'rock'
    }
    else if(rand >= 1/3 && rand < 2/3){
        cm = 'paper'
    }
    else if(rand >= 2/3 && rand < 1){
        cm ='scissors'
    }
    console.log(`Computer move is ${cm}`)

    if(our === cm){
        document.getElementById("dom").innerHTML = `tie (${co})`;
    }
    else if(our === 'rock' && cm ==='scissors'){
        document.getElementById("dom").innerHTML = `You win! (${co})`;
    }
    else if(our === 'paper' && cm === 'rock'){
        document.getElementById("dom").innerHTML = `You win! (${co})`;
    }
    else if(our ==='scissors' && cm === 'paper'){
        document.getElementById("dom").innerHTML = `You win! (${co})`;
    }
    else{
        document.getElementById("dom").innerHTML = `the computer is beddah than yo! (${co})`;
    }

}