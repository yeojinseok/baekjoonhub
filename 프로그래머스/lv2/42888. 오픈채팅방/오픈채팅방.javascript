function solution(record) {
    var answer = [];
    let userId = new Map();
    for(let i=0; i<record.length; i++){
        let[key,uid,name]= record[i].split(" ")
        if(name) userId.set(uid,name)
    }
    for(let i=0; i<record.length; i++){
        let[key,uid,name]= record[i].split(" ")
        switch(key){
            case 'Enter' : answer.push(`${userId.get(uid)}님이 들어왔습니다.`)
            break;
            case 'Leave' : answer.push(`${userId.get(uid)}님이 나갔습니다.`)
            break;    
            default: ;
        }
    }
    return answer;
}