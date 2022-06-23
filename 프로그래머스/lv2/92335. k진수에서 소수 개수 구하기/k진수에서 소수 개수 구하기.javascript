function solution(n, k) {
    var answer = [];
    let knum =[]
    function changeK(n,k){
        if(n/k==0) return 
        else {
            changeK(Math.floor(n/k),k)
            knum.push(n%k)
        }
    }
    changeK(n,k)
    
    let stack = [];
    for(let i=0; i<knum.length; i++){
        stack.push(knum[i])
        // console.log(stack)
        if(knum[i] == 0){
            stack.pop()
            if(stack.length>0) isPrime(stack.join(""),answer)
            while(stack.pop());
        }else if (i==knum.length-1){
            if(stack.length>0) isPrime(stack.join(""),answer)
        }
    }
    console.log(answer)
    return answer.length;
}


function isPrime(number,answer){
    console.log(number)
    if(number ==1 ) return false
     for(let i = 2; i <= Math.floor(Math.sqrt(number)); i++){
        if(number % i ==0 ) return false;
    }
    answer.push(number)
}