
function solution(s) {
    var answer = 0;
    let answerStr=[]
    let number = new Map([
        ["zero",0],
            ["one",1],
            ["two",2],
            ["three",3],
            ["four",4],
            ["five",5],
            ["six",6],
            ["seven",7],
            ["eight",8],
        ["nine",9]
    ])
    let setnumber=new Set(['0','1','2','3','4','5','6','7','8','9'])
    let stack = []
    for(let i=0; i<s.length; i++){
        stack.push(s[i])
        if(setnumber.has(s[i])){
            answerStr.push(s[i])
            stack.pop()
        }
        else if(number.has(stack.join(""))){
            answerStr.push(number.get(stack.join("")))
            while(stack.length>0) stack.pop()
        }

    }
    answer = +answerStr.join("")
    return answer;
}