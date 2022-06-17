function solution(participant, completion) {
    var answer = '';
    let completePerson = new Map()
    for(x of participant){
        if(completePerson.has(x)) completePerson.set(x,completePerson.get(x)+1)
        else completePerson.set(x,1)
    }
    for(x of completion){
        // console.log(completePerson.get(x))
        if(completePerson.has(x)){
           if(completePerson.get(x)>1) completePerson.set(x,completePerson.get(x)-1)
            else completePerson.delete(x)
        }
     

    }
       for([key,val] of completePerson){
           answer = key
       }
    return answer;
    

}