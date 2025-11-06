function calculateAge() {
    const birthYear = document.getElementById('birthYear').value;
    const resultDiv = document.getElementById('result');
    const ageDisplay = document.getElementById('ageDisplay');
    const ageText = document.getElementById('ageText');

    if (!birthYear) {
        alert('Por favor, informe o ano de nascimento!');
        return;
    }

    const currentYear = new Date().getFullYear();
    const age = currentYear - parseInt(birthYear);

    if (age < 0) {
        alert('O ano de nascimento não pode ser no futuro!');
        return;
    }

    if (age > 150) {
        alert('Por favor, informe um ano de nascimento válido!');
        return;
    }

    ageDisplay.textContent = age;
    
    if (age === 1) {
        ageText.textContent = 'Você tem 1 ano de idade';
    } else {
        ageText.textContent = `Você tem ${age} anos de idade`;
    }

    resultDiv.classList.add('show');
}

document.getElementById('birthYear').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calculateAge();
    }
});