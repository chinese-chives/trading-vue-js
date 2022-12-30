const code_jys = {
    'sz': ['00', '2', '3'],
    'sh': ['6', '9', '7', '5'],
    'bj': ['43', '83', '87', '88']
}

export function jys(code) {
    for (let k in code_jys) {
        let prefixes = code_jys[k]
        for (let prefix of prefixes) {
            if (code.indexOf(prefix) === 0) return k
        }
    }

    throw `bad code ${code}`
}
