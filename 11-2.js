// 곱하기 혹은 더하기
let solution = (n) => {
    return n.split("").map((element) => parseInt(element))
                      .reduce((arr, cur, idx) => {
                        if (idx === 0) {
                            return arr
                        }
                        if (arr <= 1 || cur <= 1) {
                            arr += cur
                            return arr
                        }
                        arr *= cur
                        return arr
                    })
}

console.log(solution("02984"))
console.log(solution("567"))
