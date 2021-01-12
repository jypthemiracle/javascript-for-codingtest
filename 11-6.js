// 무지의 먹방 라이브
// 아래 코드로 내면 효율성 테스트에서 맛이 간다.
let solution_recursive = (food_times, k) => {
    if (Math.max(food_times) < k) {
        return -1
    }
    let queue = food_times.reduce((acc, cur, idx) => {
        acc.push([cur, idx+1]) // 음식 시간과 음식 번호
        return acc
    }, [])
    queue.sort((a, b) => a[0] - b[0]);
    let result = (sum_value = 0, previous = 0, length = food_times.length) => {
        if (sum_value + (queue[0][0] - previous) * length <= k) {
            let now = queue.shift()[0]
            sum_value += (now - previous) * length // sum_value = 먹기 위해 사용한 시간
            length -= 1
            previous = now // previous = 직전에 다 먹은 음식 시간
            return result(sum_value, previous, length)
        } else {
            queue.sort((a, b) => a[1] - b[1])
            return queue[(k - sum_value) % length][1]
        }
    }
    return result()
}

let solution_iterative = (food_times, k) => {
    if (Math.max(food_times) < k) {
        return -1
    }
    let queue = food_times.reduce((acc, cur, idx) => {
        acc.push([cur, idx+1]) // 음식 시간과 음식 번호
        return acc
    }, [])
    queue.sort((a, b) => a[0] - b[0]);

    let sum_value = 0
    let previous = 0
    let length = food_times.length

    while ((sum_value + (queue[0][0] - previous) * length) <= k) {
        let now = queue.shift()[0]
        sum_value += (now - previous) * length
        length -= 1
        previous = now
    }
    queue.sort((a, b) => a[1] - b[1])
    return result[(k - sum_value) % length][1]
}

// https://akh95123.blogspot.com/2019/09/javascript.html
function solution(food_times, k) {
    let sortFoodTimes = [];
    const len = food_times.length;
    
    //1. {index, time} 구조의 배열로 생성
    //2. time 오름차순으로 정렬
    sortFoodTimes = food_times.map((time, index) => {
  return {index:index+1, time};
 }).sort((a,b) => {
        return a.time - b.time;
    });
    
    //3. K를 넘어가는 순간을 찾아서 반환
    for (let i = 0; i < len ; i++) {
        const food_time = sortFoodTimes[i].time; //index의 음식을 먹는데 필요한 시간
        const remains_foods_len = len - i; //남은 음식의 갯수
        const roop_time = (food_time - (i == 0 ? 0 : sortFoodTimes[i-1].time)) * remains_foods_len; //현재 roop의 음식을 먹는데 걸리는 시간
        
        if (k < roop_time) {
            return sortFoodTimes.slice(i).sort((a,b) => a.index - b.index)[k % remains_foods_len].index;
        }
        k -= roop_time; //먹은 음식들의 시간을 제외
    }
    
    return -1;
}

console.log(solution([3,1,2], 5))