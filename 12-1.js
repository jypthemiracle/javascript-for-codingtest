// 백준 18406 럭키 스트레이트
const input = require("fs").readFileSync("/dev/stdin").toString().trim()
let solution = (n) => {
    let count = 0
    let mid = Math.floor(n.length / 2)
    for (let i = 0; i < mid; i++) {
        count += parseInt(n[i])
    }
    for (let i = mid; i < n.length; i++) {
        count -= parseInt(n[i])
    }
    if (count === 0) {
        return 'LUCKY'
    } else {
        return 'READY'
    }
}

console.log(solution(input))