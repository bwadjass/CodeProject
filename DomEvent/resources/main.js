let ball = document.getElementById('float-circle');


let up = () => ball.style.bottom = '550px';
let down = () => ball.style.bottom = '50px';

document.onkeydown = up;
document.onkeyup = down;