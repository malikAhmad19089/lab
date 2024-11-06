let count = 0;
document.getElementById('incrementButton').addEventListener('click', () => {
    count++;
    document.getElementById('count').innerText = count;
});
