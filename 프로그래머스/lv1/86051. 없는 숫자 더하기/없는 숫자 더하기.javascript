function solution(numbers) {
    var answer = 0;
    let numSet = new Set(numbers)
    for(i=0; i<10; i++){
       if(!( numSet.has(i))) answer += i
    }
    return answer;
}