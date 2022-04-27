function solution(new_id) {
    var answer = new_id.toLowerCase()
    .replace(/[^\w-_.]/g,'')
    .replace(/\.+/g,'.')
    .replace(/^\.|\.$/g,'')
    .replace(/^$/g,'a')
    .slice(0,15).replace(/\.$/g,'')

    while(answer.length<=2){
        answer = answer+answer[answer.length-1]
    }
    
    return answer;
}