function getRandomFruit() {
    const fruits = ["🍇","🍈","🍉","🍊","🍋","🍌","🍍","🥭","🍎","🍏","🍐","🍑","👑","🐒"];
    const randomIndex = Math.floor(Math.random() * fruits.length);
    return fruits[randomIndex];
}
  
function spinWheel() {
    const spin1 = document.getElementById('spin1');
    const spin2 = document.getElementById('spin2');
    const spin3 = document.getElementById('spin3');
  
    spin1.innerHTML = getRandomFruit();
    spin2.innerHTML = getRandomFruit();
    spin3.innerHTML = getRandomFruit();
}
  
function updateScoreDisplay(score) {
    const scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = `Score: ${score}`;
}
  
function addPoints(points) {
    let score = parseInt(localStorage.getItem('score')) || 0;
    score += points;
    localStorage.setItem('score', score);
    updateScoreDisplay(score);
}
  
function showFruitPoints(fruit) {
    switch (fruit) {
        case "🍇":
            addPoints(10);
            break;
        case "🍈":
            addPoints(20);
        case "🍌":
            addPoints(30);
            break;
        case "🍉":
            addPoints(30);
            break;
        case "🍊":
            addPoints(40);
            break;
        case "🍋":
            addPoints(50);
            break;
        case "🍌":
            addPoints(60);
            break;
        case "🍍":
            addPoints(70);
            break;
        case "🥭":
            addPoints(80);
            break;
        case "🍎":
            addPoints(90);
            break;
        case "🍏":
            addPoints(100);
            break;
        case "🍐":
            addPoints(110);
            break;
        case "🍑":
            addPoints(120);
            break;
        case "👑":
            addPoints(200);
            break
        case "🐒":
            addPoints(1000);
            break
    }
}
    
function mainDisplay() {
    let score = parseInt(localStorage.getItem('score')) || 0;
    updateScoreDisplay(score);
}

function spin() {
    spinWheel();
        const audio = new Audio('audio/spin.mp3');
        audio.play();
        const spin1 = document.getElementById('spin1');
        const spin2 = document.getElementById('spin2');
        const spin3 = document.getElementById('spin3');
    if (spin1.innerHTML === spin2.innerHTML || spin2.innerHTML === spin3.innerHTML || spin1.innerHTML === spin3.innerHTML) {
        showFruitPoints(spin2.innerHTML);
        const audio = new Audio('audio/points.mp3');
        audio.play();
    }
}

window.addEventListener('load', mainDisplay);  