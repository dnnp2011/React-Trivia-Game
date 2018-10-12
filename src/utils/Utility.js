export const replaceSpecialChars = ( data ) => {
    for (let char of escapeMap) {
        console.log(`Key: ${char.key} Char: ${char}`);
        data.replace(char.key, char);
    }
    return data;
};

const escapeMap = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&#x2F;': '/',
    '&#x60;': '`',
    '&#x3D;': '=',
    '&epsilon;': 'ε',
    '&Phi;': 'ϕ',
};