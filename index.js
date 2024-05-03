// varibles 
let point = 0; 
let rusty_sword = 0;
let health = 10;
let defence = 0;
let armor = 0;
// end of vars
document.getElementById("start_game").onclick = function(){
    point = point + 1;
    window.location.href = "game.html";
};

document.getElementById("buy_rusty_sword").onclick = function(){
    if(point >=1){
        point = point - 1;
        rusty_sword = rusty_sword + 1;
        updateDisplay(); 
    } else {
        alert(`You don't have enough points`);
    }
};

function updateDisplay() {
    document.getElementById("pointCount").innerText = point;
}
