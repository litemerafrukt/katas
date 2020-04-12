const R = require('ramda');

const complements = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
};

const transcribeNucleotide = R.cond([
    [R.has(R.__, complements),  nucleotide => complements[nucleotide]],
    [R.always(true),            () => {throw new Error('Invalid input');}]
]);

const toRna = (dna) =>
    (R.map(transcribeNucleotide)(dna)).join('');

module.exports = function() {
    return {toRna};
};

// const complements = {
//     'G': 'C',
//     'C': 'G',
//     'T': 'A',
//     'A': 'U'
// };

// const transcribeOne = (nucleotide) => {
//     if (complements[nucleotide]) {
//         return complements[nucleotide];
//     } else {
//         throw new Error('Invalid input');
//     }
// };


// const toRna = (dna) =>
//     dna.split('').map(transcribeOne).join('');

// module.exports = function() {
//     return {toRna};
// };
