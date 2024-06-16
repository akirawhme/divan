let score = 0;

document.querySelector('.clickable').addEventListener('click', function() {
    score++;
    document.getElementById('score').innerText = score;
});
