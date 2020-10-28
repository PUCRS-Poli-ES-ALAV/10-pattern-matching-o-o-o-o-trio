const fs = require('fs');

const STRING = 3
const str1 = fs.readFileSync(`string${STRING}`).toString()
const str2 = 'messmessmessmessmessmessmessmessmessmessmessmessmessmessmessmessmessmessmessmessmessmessmessmessmessmessmesser'

let count = 0
function substrIndex(str1, str2) {
    console.log(`str1 length: ${str1.length}`)
    let j = 0

    for (let i = 0; i < str1.length; i ++) {
        count ++
        if (str1.charAt(i) == str2.charAt(j)) {
            if (j == str2.length - 1) {
                return i - j
            } else {
                j ++
            }
        } else {
            if (j > 0) {
                i -= j
                j = 0
            }
        }
    }

    return -1
}

const index = substrIndex(str1, str2)
console.log(`index: ${index}, count: ${count}`)