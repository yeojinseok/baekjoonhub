function solution(n, arr1, arr2) {
    var answer = [];
    for(let i=0; i<n; i ++){
        let bin1= arr1[i].toString(2);
        let bin2= arr2[i].toString(2);
        let count = n-bin1.length
        for(let k=0; k <count; k++){
            bin1 = "0"+ bin1
        }
        count = n-bin2.length
        for(let k=0; k <count; k++){
            bin2 = "0"+ bin2
        }
        console.log(bin2)
        let line=""
        for(let j=0; j<n; j++){
            if(bin1[j]==1 || bin2[j]==1) line= line+"#"
            else if (bin1[j]==0 && bin2[j]==0) line= line+" "
        }
        answer.push(line)
    }
    return answer;
}