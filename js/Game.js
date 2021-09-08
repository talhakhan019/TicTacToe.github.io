export default class Game{
    constructor(){
        console.log("init game");
        this.turn="X";
        this.board=new Array(9).fill(null);
    }
    nextTurn(){
        if(this.turn == "X")
        {
            this.turn = "O";
        }
        else
        {
            this.turn = "X";
        }
    }
   makeMove(i)
    {
        if(this.endOfGame())
        {
            return;
        }
        if(this.board[i]){
            return
        }
        this.board[i]=this.turn;
        let winningCombination=this.findWinningCombinations();
        if(!winningCombination){
            this.nextTurn();
        }
    }
    findWinningCombinations()
    {
        const winningCombinations = [
            [0,1,2], //winning combination
            [3,4,5], //winning combination
            [6,7,8], //winning combination
            [0,3,6], //winning combination
            [1,4,7], //winning combination
            [2,5,8], //winning combination
            [0,4,8], //winning combination
            [2,4,6]  //winning combination
        ]

        for(const combination of winningCombinations)
        {
            const [a,b,c] = combination;
            if(this.board[a] && (this.board[a] === this.board[b] && this.board[a] === this.board[c]))
            {
                return combination;
            }
        }
        return null;
    }
    endOfGame()
    {
        let winningCombination = this.findWinningCombinations();
        if(winningCombination)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}