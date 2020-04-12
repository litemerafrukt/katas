/** Functional console.log and console.error */
const curry = require('ramda/src/curry')

const c = curry((infoText, data) => {
    console.log(infoText, data)
    return data
})

const e = curry((infoText, data) => {
    console.error(infoText, data)
    return data
})

module.exports = {c, e}
