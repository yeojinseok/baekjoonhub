function solution(dirs) {
    var answer = 0;
    let movelog=[]
    let currentPlace=[0,0]
    for(let key of dirs){
    let nextPlace;
    switch(key){
            case "U":
            if(currentPlace[0]+1 !=6){            
                nextPlace =[currentPlace[0]+1,currentPlace[1]]
                setMoveLog(key,currentPlace,movelog,nextPlace)
            }

            else  nextPlace =[currentPlace[0],currentPlace[1]] 
            break;
            case "D":
            if(currentPlace[0]-1 !=-6){
                nextPlace =[currentPlace[0]-1,currentPlace[1]]  
                setMoveLog(key,currentPlace,movelog,nextPlace)
            }

           else  nextPlace =[currentPlace[0],currentPlace[1]] 
            break;
            case "R":
            if(currentPlace[1]+1 !=6){
                nextPlace =[currentPlace[0],currentPlace[1]+1] 
                setMoveLog(key,currentPlace,movelog,nextPlace)}

            else  nextPlace =[currentPlace[0],currentPlace[1]] 
          
            break;
            case "L":
           if(currentPlace[1]-1 !=-6){
            nextPlace =[currentPlace[0],currentPlace[1]-1]
            setMoveLog(key,currentPlace,movelog,nextPlace)
           }
            else  nextPlace =[currentPlace[0],currentPlace[1]] 
            break;
    }
    }
    let log = new Set(movelog.map(data=>data.split(" ").join("")))
    answer= [...log]
    console.log(answer)
    return answer.length/2;
}


function setMoveLog(key,currentPlace,movelog,nextPlace){
    movelog.push(`${currentPlace.join("")} ${nextPlace.join("")}`)
    movelog.push(`${nextPlace.join("")} ${currentPlace.join("")}`)
    while(currentPlace.pop()|| currentPlace.pop()==0);
    currentPlace.push(...nextPlace)
    return nextPlace;
}