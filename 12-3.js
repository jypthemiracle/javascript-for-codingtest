// 문자열 압축 KAKAO
let solution = (s) => {
    let answer = s; //문자열 그대로 반환
    const cut_len = s.length / 2; //문자열 길이 / 2까지만 압축가능
    const str_len = s.length; //문자열 길이만큼 loop 돌면서 자르는 단위 증가
    
    for (let i = 1; i <= cut_len; i++) { //문자열 n개 단위 자르기(1~s.length/2)
        let temp_str = ""; //임시로 압축한 문자열 저장하는 변수
        let cut_str = s.slice(0, i); //최초 n개 단위로 자른 문자
        let count = 1; //최초 문자열 자를 시 count 1로 초기화
        
        for (let j = i; j < str_len; j += i) { //문자열 길이만큼 loop(i만큼 증가)
            const str = s.slice(j, j+i);
            if (cut_str == str) { //기준이 되는 문자와 같은 경우
                count++; //숫자 증가
            } else { //n개만큼 자른 문자가 반복되지 않는 경우
                temp_str += (count > 1 ? count + cut_str : cut_str); //count 갯수를 기준으로 압축 문자 or 기존 문자 저장
                cut_str = str; //기준 문자열을 새로운 n개만큼 자른 문자로 대체
                count = 1; //count 갯수 초기화
            }
        }
        
        if (cut_str) { //for-loop 후 마지막 문자에 대하여 추가적으로 반영
            temp_str += (count > 1 ? count + cut_str : cut_str);
        }
        
        if (answer.length > temp_str.length) { //압축문자가 더 작은 경우에만 answer 갱신
            answer = temp_str;
        }
    }
    
    return answer.length;
}