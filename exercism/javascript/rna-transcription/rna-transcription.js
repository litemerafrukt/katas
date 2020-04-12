const map = require('ramda/src/map')
const __ = require('ramda/src/__')
const either = require('ramda/src/either')
const prop = require('ramda/src/prop')
const pipe = require('ramda/src/pipe')
const join = require('ramda/src/join')

const complements = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
}

const invalidInput = () => {throw new Error('Invalid input')}

const transcribeNucleotide = either(prop(__, complements), invalidInput)

const transcribeStrand = map(transcribeNucleotide)

const toRna = pipe(transcribeStrand, join(''))

module.exports = function() {
    return {toRna}
}
