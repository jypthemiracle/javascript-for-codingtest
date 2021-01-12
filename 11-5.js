// 볼링공 고르기
let solution = (n, m, temp) => {
    let data = temp.split(" ").map((element) => parseInt(element))
    data.sort()
    let counter = data.reduce((arr, cur, idx) => {
        arr[cur] += 1
        return arr
    }, new Array(11).fill(0))
    return counter.reduce((arr, cur, idx, arr) => {
        if (idx === 0 || idx > m) {
            return arr
        }
        n -= cur
        arr += cur * n
        return arr
    }, 0)
}