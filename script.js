function encrypt() {
    const inputText = document.getElementById('inputText').value;
    const shiftKey = parseInt(document.getElementById('shiftKey').value);
    const encryptedText = caesarCipher(inputText, shiftKey);
    document.getElementById('result').innerHTML = `Зашифрований текст: ${encryptedText}`;
}

function decrypt() {
    const inputText = document.getElementById('inputText').value;
    const shiftKey = parseInt(document.getElementById('shiftKey').value);
    const decryptedText = caesarCipher(inputText, -shiftKey);
    document.getElementById('result').innerHTML = `Дешифрований текст: ${decryptedText}`;
}

function caesarCipher(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const offset = char.toUpperCase() === char ? 65 : 97;
            return String.fromCharCode((code - offset + shift + 26) % 26 + offset);
        } else {
            return char;
        }
    }).join('');
}
