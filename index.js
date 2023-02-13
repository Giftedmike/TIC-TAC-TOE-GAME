var player = 1;

function playerAct(elem){
if(elem.innerHTML != "") return;

    if(player == 1){
        elem.innerHTML = 'p1'
        document.getElementById('message').innerHTML = "Player 2 Your Turn";
        player = 2;
    }

    else if(player == 2){
        elem.innerHTML = 'p2'
        document.getElementById('message').innerHTML = "Player 1 Your Turn";
        player = 1;
    }
}