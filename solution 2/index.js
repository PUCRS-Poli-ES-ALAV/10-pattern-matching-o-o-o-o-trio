const fs = require("fs");


const str1 = fs.readFileSync('../texts/string3').toString()
const str2 = "messer"
let count = 0

const index = search(str1, str2)

console.log('index: ' + index + '\n')
console.log('String length: ' + str1.length)
console.log('Pattern length: ' + str2.length)
console.log('count: ' + count)

function search(txt, pat) {
    let n = txt.length
    let m = pat.length
    let patHash = hash(pat, m)

    for (let i = 0; i < n - m; i++) {
        count ++
        let txtHash = hash(txt.slice(i, i + m), m)
        if (patHash === txtHash) {
            return i
        }
    }
    return n
}

function hash(s, m) {
    let h = 0
    let q = 479001599

    for (let j = 0; j < m; j++) {
        h = (h * 26 + s.charCodeAt(j)) % q
    }

    return h
}