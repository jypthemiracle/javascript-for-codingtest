// 문자열 재정렬
let solution = (temp) => {
    let data = temp.split("")
    let alpha = data.filter((datum) => datum.toLowerCase() !== datum.toUpperCase())
    alpha.sort()
    let alpha_vec = alpha.join('')
    alpha_vec += (data.filter((datum) => Number.isInteger(parseInt(datum)))
                    .map((string) => parseInt(string))
                    .reduce((a, b) => a + b, 0))
    return alpha_vec
}

console.log(solution("K1KA5CB7"))
console.log(solution('AJKDLSI412K4JSJ9D'))
