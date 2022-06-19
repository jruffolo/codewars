const decodeMorse = morseCode => morseCode.split('   ').map(word => word.split(' ').map(char => MORSE_CODE[char]).join('')).join(' ').trim();
