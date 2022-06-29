function solution(id_list, report, k) {
    var answer = [];
    let setReport = new Set(report)
    let countReport = new Map()
    let sendMap = new Map()
    let userReport = [...setReport].map(data=> data.split(" "))
    for(let i =0; i<userReport.length; i++){
        countReport.set(userReport[i][1],(countReport.get(userReport[i][1])||0) +1 )
    }
    for(let i =0; i<userReport.length; i++){
        if(countReport.get(userReport[i][1]) >= k) 
            sendMap.set(userReport[i][0], (sendMap.get(userReport[i][0])||0)+1 )
    }
    console.log(countReport)
    for( x of id_list){
        if(sendMap.has(x)) answer.push(sendMap.get(x))
        else answer.push(0)
    }
    
    return answer;
}