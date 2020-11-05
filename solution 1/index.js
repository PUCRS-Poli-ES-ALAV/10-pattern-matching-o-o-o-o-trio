const fs = require("fs");

const str1 = fs.readFileSync('../texts/string3').toString()
const str2 = "messer"

let count = 0
const index = substrIndex(str1, str2)
console.log('index: ' + index + '\n')
console.log('String length: ' + str1.length)
console.log('Pattern length: ' + str2.length)
console.log('count: ' + count)

function substrIndex(str1, str2) {
    let j = 0

    for (let i = 0; i < str1.length; i++) {
        count++
        if (str1.charAt(i) == str2.charAt(j)) {
            if (j == str2.length - 1) {
                return i - j
            } else {
                j++
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