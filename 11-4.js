// 만들 수 없는 금액
let solution = (n, temp) => {
    let data = temp.split(" ").map((element) => parseInt(element))
    data.sort()
    if (data.length !== n) {
        return -1
    }
    let target = 1
    data.some((datum) => {
        if (target >= datum) {
            target += datum
        }
        return (target < datum)
    })
    return target
}

console.log(solution(5, "3 2 1 1 9"))
console.log(solution(4, "1 2 3 8"))
