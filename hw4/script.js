
const btnOn = document.getElementById('on');
const btnOff = document.getElementById('off');


btnOn.onclick = function() {
    document.body.style.backgroundColor = 'yellow';
};


btnOff.onclick = function() {
    document.body.style.backgroundColor = 'white';
};