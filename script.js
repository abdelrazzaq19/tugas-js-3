function checkPrime() {
    const num = parseInt(document.getElementById("numberInput").value);
    const resultElement = document.getElementById("result");

    if (isNaN(num) || num < 1) {
        resultElement.textContent = "Please enter a valid positive number.";
        return;
    }

    if (num === 1) {
        resultElement.textContent = "1 is not a prime number.";
        return;
    }

    if (num === 2) {
        resultElement.textContent = "2 is a prime number.";
        return;
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        resultElement.textContent = `${num} is a prime number.`;
    } else {
        resultElement.textContent = `${num} is not a prime number.`;
    }
}
