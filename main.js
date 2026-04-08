const generateBtn = document.getElementById('generate');
const numbersDiv = document.querySelector('.numbers');

generateBtn.addEventListener('click', () => {
    const lottoNumbers = [];
    while (lottoNumbers.length < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        if (!lottoNumbers.includes(randomNumber)) {
            lottoNumbers.push(randomNumber);
        }
    }

    lottoNumbers.sort((a, b) => a - b);

    numbersDiv.innerHTML = '';
    for (const number of lottoNumbers) {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');
        numberDiv.textContent = number;
        numbersDiv.appendChild(numberDiv);
    }
});