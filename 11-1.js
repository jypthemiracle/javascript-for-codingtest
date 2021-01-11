let solution = (n, temp) => {
    let data = temp.split(" ").map((element) => parseInt(element))
    data.sort()
    if (data.length !== n) {
        return -1
    }
    let answer = data.reduce((arr, cur, idx) => {
        // result는 arr[0]이고,
        // current_group_adventurer는 arr[1]이다.
        if (arr[1] + 1 >= cur) {
            arr[0] += 1
            arr[1] = 0
            return arr
        } else {
            arr[1] += 1
            return arr
        }
    }, [0,0])
    return answer[0]
}

console.log(solution(5, "2 3 1 2 2"))