// 백준 1439번
let solution = (n) => {
    let data = Array.from(n, Number)
    const answer = data.reduce((acc, cur, idx, arr) => {
        if (cur != arr[idx+1] && cur === 0) {
            acc[0] += 1 // zero_to_one
            return acc
        } else if (cur != arr[idx+1] && cur === 1) {
            acc[1] += 1 // one_to_zero
            return acc
        }
        return acc
    }, [0,0])
    return Math.min(...answer)
}

console.log(solution("0001100"))
