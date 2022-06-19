function solution(numbers, hand) {
    var answer = '';
    let keymap = new Map([
        [1,[0,0]],
         [2,[0,1]],
         [3,[0,2]],
         [4,[1,0]],
         [5,[1,1]],
         [6,[1,2]],
         [7,[2,0]],
         [8,[2,1]],
         [9,[2,2]],
         ['*',[3,0]],
         [0,[3,1]],
         ['#',[3,2]]
    ])
    let handmap= new Map([
        ["right",[3,2]],
        ["left",[3,0]]
    ])
    let leftline = new Set([1,4,7,'*'])
    let rightline = new Set([3,6,9,'#'])
    for(x of numbers){
        let lc=0
        let rc =0
        let click= keymap.get(x)

        
        if(leftline.has(x)){
            handmap.set("left",click)
            answer= answer + "L"
        }else if(rightline.has(x)){
            handmap.set("right",click)
            answer= answer + "R"
        }
        else{
            let rclick= handmap.get("right")
            let lclick= handmap.get("left")
            console.log(x)
            lc = Math.abs(click[0]-lclick[0]) + Math.abs(click[1]-lclick[1])
            rc = Math.abs(click[0]-rclick[0]) + Math.abs(click[1]-rclick[1])
            if(lc>rc) {
                handmap.set("right",click) 
                answer= answer + "R"
            }
            else if(lc<rc){
                handmap.set("left",click)
            answer= answer + "L"
            }else{
                handmap.set(hand,click)
                if(hand=="right") answer= answer + "R"
                else answer= answer + "L"
            }
        }

    }
    return answer;
}