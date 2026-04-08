// --- ЛОГИКА КАЛЬКУЛЯТОРА ---
const display = document.getElementById('display');

function appendToDisplay(input) {
    if (display.value === 'Divine' || display.value === '0') {
        if (input === '.') {
            display.value = '0.';
        } else {
            display.value = input;
        }
    } else {
        if (input === '.' && display.value.includes('.')) return;
        display.value += input;
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    if (display.value === 'Divine') {
        clearDisplay();
    } else {
        display.value = display.value.slice(0, -1);
    }
}

function calculate() {
    if (!display.value) return;

    try {
        let result = new Function('return ' + display.value)();
        
        if (result === Infinity || result === -Infinity) {
            display.value = 'Divine'; // Заменяем Error на Divine
            return;
        }

        display.value = Number(result.toFixed(8)).toString();
    } catch (error) {
        display.value = 'Divine';
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (/[0-9]/.test(key)) appendToDisplay(key);
    if (['+', '-', '*', '/'].includes(key)) appendToDisplay(key);
    if (key === '.' || key === ',') appendToDisplay('.');
    if (key === 'Enter') { event.preventDefault(); calculate(); }
    if (key === 'Escape') clearDisplay();
    if (key === 'Backspace') deleteLast();
});


// --- АНИМАЦИЯ ЗОЛОТЫХ ЧАСТИЦ (CANVAS) ---
const canvas = document.getElementById('holyCanvas');
const ctx = canvas.getContext('2d');
let w, h, particles = [];

function init() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    particles = [];
    for(let i = 0; i < 70; i++) {
        particles.push({
            x: Math.random() * w,
            y: Math.random() * h,
            vy: 0.5 + Math.random() * 1, // Медленное падение вверх
            r: Math.random() * 1.5 + 0.5,
            alpha: Math.random() * 0.5
        });
    }
}

function draw() {
    ctx.clearRect(0,0,w,h);
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 0, ${p.alpha})`; // Золотые искры
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#fff";
        ctx.fill();
        
        p.y += p.vy;
        p.x += Math.sin(p.y * 0.01) * 0.3; // Легкое покачивание
        
        if(p.y > h + 10) p.y = -20;
    });
    requestAnimationFrame(draw);
}

window.addEventListener('resize', init);
init();
draw();