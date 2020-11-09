/*
* O algoritmo abaixo implementa a solução do Knuth-Morris-Pratt para o pattern matching.
* Complexidade: O(m + n)
*
* */
const fs = require("fs");

const str1 = fs.readFileSync('../texts/string3').toString()
const str2 = "messer"
let count = 0

const start = process.hrtime()
let index = search(str1, str2)
const duration = process.hrtime(start)

console.log('index: ' + index + '\n')
console.log('String length: ' + str1.length)
console.log('Pattern length: ' + str2.length)
console.log('count: ' + count)
console.log('time elapsed: ' + duration)

function search(txt, pat) {
    const n = txt.length
    const m = pat.length

    const lps = []
    let j = 0

    compute(pat, m, lps)

    let i = 0
    while(i < n) {
        count ++
        if (pat.charAt(j) == txt.charAt(i)) {
            j ++
            i ++
        }
        if (j == m) {
            return i - j
        } else if (i < n && pat.charAt(j) != txt.charAt(i)) {
            if (j != 0)
                j = lps[j - 1]
            else
                i ++
        }
    }
}

function compute(pat, m, lps) {
    let len = 0
    let i = 1
    lps[0] = 0

    while(i  < m) {
        if (pat.charAt(i) == pat.charAt(len)) {
            len ++
            lps[i] = len
            i ++
        } else {
            if (len != 0)
                len = lps[len - 1]
            else {
                lps[i] = len
                i ++
            }
        }
    }
}