var player = 1;

function playerAct(elem){
    if(player == 1){
        elem.innerHTML = 'p1'
        player = 2;
    }

    else if(player == 2){
        elem.innerHTML = 'p2'
        player = 1;
    }
}