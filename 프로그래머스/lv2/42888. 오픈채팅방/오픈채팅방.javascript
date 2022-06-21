function solution(record) {
    var answer = [];
    let userList = new Map();
    for(let i=0; i<record.length; i++){
        let log = record[i].split(" ")
        if((log[0]=='Enter') || (log[0]=='Change')){
            userList.set(log[1],log[2])
        }
    }
    for(let i=0; i<record.length; i++){
        let log = record[i].split(" ")
        switch (log[0]){
            case 'Enter': answer.push(`${userList.get(log[1])}님이 들어왔습니다.`) ;
                break;
            case 'Leave':answer.push(`${userList.get(log[1])}님이 나갔습니다.`) ;
                break;
            default:console.log("...")
            
        }
    }

    return answer;
}

