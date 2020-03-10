class Knight extends Piece{
    constructor(position, source, type) {
        super(position,source,type);
    }

    getValidMoves() {
        let currentPos = Number(this.position);
        if (selectedPiece != this.position) {
            oldSelectedPiece = selectedPiece;
            selectedPiece = this.position;
            clearValidMoves();
            this.clean();
        }

        //right -> right -> up = -8
        //right -> right -> down = +12
        //up -> up -> right = -19
        //up -> up -> left = -21
        //left -> left -> up = -12
        //left -> left -> down = +8
        //down -> down -> right = +21
        //down -> down -> left = +19

        let knightMoves = [-8, 12, -19, -21, -12, 8, 21, 19];

        for (let i = 0; i < knightMoves.length; i++) {
            let option = currentPos + knightMoves[i];
            if (option >= 10 && option <= 88) {
                if (option % 10 == 0 || option % 10 == 9) {
                    continue;
                }
                if(document.getElementById(option.toString()).src == ""){
                    this.getMoveArray().push(option);
                }else{
                    this.checkCapture(option);
                }
            }
        }

        moveOptions = this.getMoveArray();
        return this.getMoveArray();
        // this.highlightMoves(this.getMoveArray());

    }

    getNextValidMoves(Knight) {
        let NextMoveArray = new Array();
        let currentPos = Number(Knight.position);
        if (selectedPiece != Knight.position) {
            oldSelectedPiece = selectedPiece;
            selectedPiece = Knight.position;
            clearValidMoves();
            this.clean();
        }

        //right -> right -> up = -8
        //right -> right -> down = +12
        //up -> up -> right = -19
        //up -> up -> left = -21
        //left -> left -> up = -12
        //left -> left -> down = +8
        //down -> down -> right = +21
        //down -> down -> left = +19

        let knightMoves = [-8, 12, -19, -21, -12, 8, 21, 19];

        for (let i = 0; i < knightMoves.length; i++) {
            let option = currentPos + knightMoves[i];
            if (option >= 10 && option <= 88) {
                if (option % 10 == 0 || option % 10 == 9) {
                    continue;
                }
                if (document.getElementById(option.toString()).src == "") {
                    NextMoveArray.push(option);
                } else {
                    this.checkCapture(option);
                }
            }
        }

        moveOptions = this.getMoveArray();
        var returnArray = NextMoveArray.concat(moveOptions);
        this.NextMove = returnArray;
        this.NextMove = returnArray;
        return returnArray;
    }
    getCheckValidMoves(checkarray,checkopponentpos){
        let validcheckmove = new Array();
        let moves = this.getValidMoves();
        
        for(var i = 0; i<moves.length;i++){
            
             if(checkarray.includes(moves[i])){
                 validcheckmove.push(moves[i]);
             }
        }
        if(checkarray.includes(checkopponentpos)){validcheckmove.push(checkopponentpos)}
        return validcheckmove
    }
    
}