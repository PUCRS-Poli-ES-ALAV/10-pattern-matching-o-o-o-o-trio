function search(pat, txt) {
    let m = pat.length
    let n = txt.length
    let patHash = hash(pat, m)

    for (let i = 0; i < n - m; i++) {
        let txtHash = hash(txt.slice(i, i + m), m)
        if (patHash === txtHash) return i
    }
    return n
}

function hash(s, m) {
    let h = 0
    let q = 997
    for (let j = 0; j < m; j++) {
        h = (h * 26 + s.charAt(j)) % q
    }
    return h

}

console.log(search("choris", "bom dia grupo choris na area"))
