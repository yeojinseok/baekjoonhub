function solution(participant, completion) {
    var answer = '';
    let completePerson = new Map()
    for(let i=0; i<participant.length; i++){
        completePerson.set(participant[i],(completePerson.get(participant[i])||0) +1)
        completePerson.set(completion[i],(completePerson.get(completion[i])||0) -1)
    }

       for([key,val] of completePerson){
           if(val>0) {
               answer=key;
               break;
           }
       }
    return answer;
    

}