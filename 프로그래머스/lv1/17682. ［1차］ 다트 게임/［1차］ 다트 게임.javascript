function solution(dart) {
    let  dartResult = dart
    var answer = 0;
    let stack =[];
    for(let i=0; i< dartResult.length; i++){
        let number
        if(Number.isInteger(Number(dartResult[i]))){            
                if(dartResult[i+1]==0 ){
                    number= dartResult.slice(i,i+2)
                    stack.push(number)
                    i = i+1
                }else stack.push(dartResult[i])
        }else if(dartResult[i] ==='D'){
            number = stack.pop();
            stack.push(number*number)
        }else if(dartResult[i] === 'T'){
            number = stack.pop();
            // console.log(number)
            stack.push(number*number*number)
        }else if(dartResult[i]==='*'){
            let nowScore = stack.pop()
            let prevScore = stack.pop()
            if(prevScore) stack.push(prevScore*2)
            stack.push(nowScore*2)
        }else if(dartResult[i] ==='#'){
            let number =stack.pop()
            stack.push(-number)
        }
    }
    console.log(stack)
    stack.map(x=>answer += Number(x))
    return answer;
}