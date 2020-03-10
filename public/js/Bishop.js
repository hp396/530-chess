class Bishop extends Piece {
    boardcheck(number) {
        if (number > 88 || number < 11) {
            return false;
        }
        else if (number % 10 > 8 || number % 10 == 0) {
            return false;
        }
        else { return true; }
    }

    getValidMoves() {
        let currentPos = Number(this.position);
        if (selectedPiece != this.position) {
            oldSelectedPiece = selectedPiece;
            selectedPiece = this.position;
            clearValidMoves();
            this.clean();
        }

        let bishopMoves = [9, -9, 11, -11];

        for (let i = 0; i < bishopMoves.length; i++) {
            let option = currentPos;
            option += bishopMoves[i];

            var check = this.boardcheck(option);
            if (!check) { continue; }

            do {
                var isEmptySquare = document.getElementById(option.toString()).src == "";
                if (isEmptySquare){
                    this.getMoveArray().push(option);
                }else{
                    this.checkCapture(option);
                    break;
                }
                option += bishopMoves[i];
            } while (this.boardcheck(option));

        }

        moveOptions = this.getMoveArray();
        return this.getMoveArray();
        // this.highlightMoves(this.getMoveArray());

    }


    getNextValidMoves(Bishop) {
        let NextMoveArray = new Array();
        let currentPos = Number(Bishop.position);
        if (selectedPiece != Bishop.position) {
            oldSelectedPiece = selectedPiece;
            selectedPiece = Bishop.position;
            clearValidMoves();
            this.clean();
        }
        let type = Bishop.type;

        let bishopMoves = [9, -9, 11, -11];

        for (let i = 0; i < bishopMoves.length; i++) {
            let option = currentPos;
            option += bishopMoves[i];

            var check = this.boardcheck(option);
            if (!check) { continue; }

            do {
                var isEmptySquare = document.getElementById(option.toString()).src == "";
                var isKing; 
                if (type =="White"){
                    isKing= document.getElementById(option.toString()).src == "Pieces/White/wK.png";
                }else{
                    isKing = document.getElementById(option.toString()).src == "Pieces/Black/bK.png";
                }

                if (isEmptySquare || isKing) {
                    NextMoveArray.push(option);
                } else {
                    this.checkCapture(option);
                    break;
                }
                option += bishopMoves[i];
            } while (this.boardcheck(option));

        }

        moveOptions = this.getMoveArray();
        var returnArray = NextMoveArray.concat(moveOptions); 
        this.NextMove = returnArray;
        return returnArray;
    }
    getCheckValidMoves(checkarray,checkopponentpos){
        let validcheckmove = new Array();
        let moves = this.getValidMoves();
        // console.log(moves);
        for(var i = 0; i<moves.length;i++){
             if(checkarray.includes(moves[i])){
                 validcheckmove.push(moves[i]);
             }
        }
        if(checkarray.includes(checkopponentpos)){validcheckmove.push(checkopponentpos)}
        return validcheckmove
    }
}