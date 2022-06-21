function solution(priorities, location) {
    var answer = 0;
    let stop=true 
    while(true){
        let max = Math.max(...priorities.slice(1,),priorities[0])
        if(max!=priorities[0]){
            changeArray(priorities)
            if(location == 0) location = priorities.length-1
            else location --
        }else if(max == priorities[0]) {
            console.log(max,location)
            if(location == 0 ) return ++answer
            priorities.shift()
            answer ++
            location --
        }
    }
    return answer;
}

function changeArray(list){
    list.push(list.shift())
}