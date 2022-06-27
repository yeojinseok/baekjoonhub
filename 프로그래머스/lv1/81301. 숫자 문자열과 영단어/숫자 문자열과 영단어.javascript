function solution(s) {
    let answer=""
    let number = {
        "zero":0,
        "one":1,
        "two":2,
        "three":3,
        "four":4,
        "five":5,
        "six":6,
        "seven":7,
        "eight":8,
        "nine":9
    }
    let str = s
    Object.keys(number).forEach((key,val)=>{
        let pattern = new RegExp(key,"g")
        // console.log(key,val)
        str=str.replace(pattern,val)
        // console.log(str)
    })
    console.log(str)
    return answer = parseInt(str)
}