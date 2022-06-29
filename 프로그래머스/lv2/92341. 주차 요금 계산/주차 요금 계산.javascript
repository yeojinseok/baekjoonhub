function solution(fees, records) {
    var answer = [];
    let carOfPrice=[]
    let carMap = new Map()
    getTotalTime(carMap,records)
    getPrice(carMap,fees,carOfPrice)
    carOfPrice.sort((a,b)=> {
        return a[0]-b[0]
    })  
    carOfPrice.map(data=> answer.push(data[1]))
    return answer;
}

function getPrice(carMap,fees,carOfPrice){
    let [basicTime,basicPrice,partTime,PartPrice] = fees;
    carMap.forEach((val,key)=>{
        let totalPrice=0;
 
        if(val[0]=='IN') val[1] += + (23*60) + 59
        if(val[1] <= basicTime) totalPrice=basicPrice
        else{
            val[1]-= basicTime
            totalPrice+=basicPrice
            console.log(key,totalPrice)
            totalPrice+= (Math.floor(val[1]/partTime)*PartPrice) + (val[1]%partTime? PartPrice:0)
            console.log(key,totalPrice)
        }
        carOfPrice.push([key,totalPrice])
    })
}

function getTotalTime(carMap,records){
        for(let list of records){
        let [time,car,log] = list.split(" ")
        time = time.split(':')
        time= +time[0] * 60 + +time[1]
        if(log=='IN'){
            if(carMap.has(car))
            carMap.set(car,[log,(carMap.get(car)[1])- time] )
            else
            carMap.set(car,[log,-time] )
        }else{
            if(carMap.has(car))
            carMap.set(car,[log,(carMap.get(car)[1])+ time] )
            else
            carMap.set(car,[log,+time] )
        }
    }
}