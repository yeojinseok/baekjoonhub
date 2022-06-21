function solution(progresses, speeds) {
    var answer = [];
    let i=0;
    let stack=[]
    while(i<progresses.length){
        gotime(progresses, speeds)
        let deploycount = deployCheck(progresses,i)
        if(deploycount) answer.push(deploycount)
        i+=deploycount;
    }
    return answer;
}

function deployCheck(progresses,count){
    let stack=[]
 
    for(let i=count; i<progresses.length;i++){
        if(progresses[i]>=100) stack.push(i) 
        else break;
    }
    return stack.length;
    
}
function gotime(progresses,speeds){
    for(let i=0; i<progresses.length; i++)
        progresses[i] += speeds[i]
}