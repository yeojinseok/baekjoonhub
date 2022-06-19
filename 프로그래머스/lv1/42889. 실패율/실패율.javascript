function solution(N, stages) {
    var answer = [];
    const clearstageMap = new Map()
    const notClearstageMap = new Map()
    for(x of stages){
        for(let i=1; i<=x; i ++) clearstageMap.set(i,((clearstageMap.get(i)||0)+1))
        notClearstageMap.set(x,((notClearstageMap.get(x)||0)+1))
    }
    let finaldata = []
    for(let i=1; i <= N; i++){
        if(clearstageMap.get(i))
        finaldata.push([i,(notClearstageMap.get(i)||0)/(clearstageMap.get(i)||0)])
        else finaldata.push([i,0])
    }
    finaldata.sort((a,b)=>{
        if(b[1]===a[1]) return a[0] - b[0]
        else return b[1]-a[1]
    })
    finaldata.map(data=> answer.push(data[0]))
    return answer;
}