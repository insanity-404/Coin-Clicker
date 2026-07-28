let coins = 0;
let multiplier = 1;
let multiplierCost = 25;
let autoClickers = 0
let autoClickerCost = 50
let amt = 1

let buySound = new Audio();
buySound.src = "./Ka-Ching SFX.mp3";

let music = new Audio();
music.src = "Party House.wav";
music.loop = true;
music.volume = 1
music.play();

function muteMusic() {
    music.volume = 0
}
function unmuteMusic() {
    music.volume = 1
}
function muteSFX() {
    buySound.volume = 0
}
function unmuteSFX() {
    buySound.volume = 1
}
function displayClicks() {
    document.getElementById("CPS").innerHTML = `Clicks Per Second: ${autoClickers}`;
    document.getElementById("coinDisplay").innerHTML = `Coins: ${coins}`;
}
function displayCosts() {
    multiplierCost = Math.floor(multiplierCost)
    document.getElementById("upgradeClicksButton1").innerHTML = `Buy 1 Upgrade For ${multiplierCost} Coins`
    document.getElementById("autoClickerButton1").innerHTML = `Buy 1 Auto Clicker For ${autoClickerCost} Coins`
}
function Click(){
    coins += multiplier
    displayClicks()
};
function AutoClick(){
    coins += autoClickers
    displayClicks()
}
function BuyUpgrade(){
    if (coins >= multiplierCost){
        coins = coins -  multiplierCost * amt
        multiplier ++
        multiplierCost = multiplierCost * 1.5
        buySound.play()
        displayCosts()
        displayClicks()
    };
}
function BuyAutoClicker(){
    if (coins >= autoClickerCost){
        coins = coins - autoClickerCost * amt
        autoClickers ++
        autoClickerCost = autoClickerCost * 2
        buySound.play()
        displayCosts()
        displayClicks()
    };
}
setInterval(AutoClick ,1000)