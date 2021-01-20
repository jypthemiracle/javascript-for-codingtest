// 자물쇠와 열쇠
let rotate_a_matrix_by_90_degree = (a) => {
    let n = a.length
    let m = a[0].length
    return a.reduce((acc, cur, idx1, arr) => {
        cur.map((element, idx2) => {
            acc[idx2][arr.length-idx1-1] = element
        })
        return acc
    }, Array.from({ length: m }, () => Array.from({ length: n }, () => 0)))
}

let check = (new_lock) => {
    let lock_length = Math.floor(new_lock.length / 3)
    let check_lock = new_lock.slice(lock_length, lock_length * 2).map(i => i.slice(lock_length, lock_length * 2))
    return check_lock.reduce((validity, elements) => {
        validity = elements.every((element) => {
            return element === 1
        })
        return validity
    }, false)
}

let solution = (key, lock) => {
    let n = lock.length
    let m = key.length
    let new_lock = lock.reduce((acc, cur, idx1, arr) => {
        cur.map((element, idx2) => {
            acc[idx1 + n][idx2 + n] = element
        })
        return acc
    }, Array.from({ length: n * 3 }, () => Array.from({ length: n * 3 }, () => 0)))
    for (let rotation = 0; rotation < 4; rotation++) {
        key = rotate_a_matrix_by_90_degree(key)
        for (let x = 0; x < n * 2; x++) {
            for (let y = 0; y < n * 2; y++) {
                // 자물쇠에 열쇠를 끼워 넣기
                for (let i = 0; i < m; i++) {
                    for (let j = 0; j < m; j++) {
                        new_lock[x + i][y + j] += key[i][j]
                    }
                }
                // 검사
                if (check(new_lock) === true) {
                    return true
                }
                // 자물쇠에서 열쇠를 다시 빼기
                for (let i = 0; i < m; i++) {
                    for (let j = 0; j < m; j++) {
                        new_lock[x + i][y + j] -= key[i][j]
                    }
                }
            }
        }
    }
    return false
}

let key = [[0,0,0], [1,0,0], [0,1,1]]
let lock = [[1,1,1], [1,1,0], [1,0,1]]
console.log(solution(key, lock))