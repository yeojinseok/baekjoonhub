function solution(board, moves) {
    var answer = 0;
    const stack = [];
    let fork=[]
    for(let i =0; i< moves.length; i ++){
         fork= moves[i]-1

        for(let j = 0; j< board.length; j++){
  
            if(board[j][fork]!==0){
                if(stack[stack.length -1]!==board[j][fork]){
                    stack.push(board[j][fork])
                }else {
                    stack.pop()
                    answer = answer +2;
                }
                board[j][fork]=0;
                break;
            }
        }
    }

         
    return answer;
}