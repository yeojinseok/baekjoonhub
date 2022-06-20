function solution(s) {
    var answer = s.length;
    for(let i=1; i <= s.length; i++){
        // i는 몇개로 나눌지 선택하는 값. 
        let answerStack=[]
        let stack=[]
        let j=0
      while(j<s.length){
        stack.push(s.slice(j,(j+i)))
          j= j+i
      } let count =1 
      let x=0
        while(x<stack.length){
            if(stack[x]==stack[x+1]) count ++
            else if(count >1){
                answerStack.push(count)
                answerStack.push(stack[x])
                count =1
            }else if(count ==1) answerStack.push(stack[x])
               x++
        }
               // console.log(answerStack.join(""))
        // console.log(answerStack)
        if(answerStack.join("").length <= answer) answer = answerStack.join("").length
    }
    return answer;
}