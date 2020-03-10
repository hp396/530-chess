class King extends Piece {
  constructor(position, source, type) {
    super(position, source, type);
  }

  boardcheck(number) {
    if (number > 88 || number < 11) {
      return false;
    } else if (number % 10 > 8 || number % 10 == 0) {
      return false;
    } else {
      return true;
    }
  }

  getValidMoves() {
    let currentPos = Number(this.position);
    if (selectedPiece != this.position) {
      oldSelectedPiece = selectedPiece;
      selectedPiece = this.position;
      clearValidMoves();
      this.clean();
    }

    let kingMoves = [-10, 10, -1, 1, -9, 9, 11, -11];

    for (let i = 0; i < kingMoves.length; i++) {
      let option = currentPos + kingMoves[i];
      if (option >= 10 && option <= 88) {
        if (option % 10 == 0 || option % 10 == 9) {
          continue;
        }

        var isSquareEmpty =
          document.getElementById(option.toString()).src == "";
        if (isSquareEmpty) {
          this.getMoveArray().push(option);
        } else {
          this.checkCapture(option);
        }
      }
      
    }

    moveOptions = this.getMoveArray();
    return moveOptions
    //#this.highlightMoves(this.getMoveArray());
  }
    
    getNextValidMoves(King) {
        return [];
    }

    allThePossible(King){
        let NextMoveArray = new Array();

        let currentPos = Number(King.position);
        if (selectedPiece != King.position) {
            oldSelectedPiece = selectedPiece;
            selectedPiece = King.position;
            clearValidMoves();
            this.clean();
        }

        let movesUp = 90 - currentPos;

        // Moves Down
        for (let i = 10; i < movesUp; i += 10) {
        let option = currentPos + i;
        if (document.getElementById(option.toString()).src != "") {
            this.checkCapture(option);
            break;
        }
        if (option > 10) NextMoveArray.push(option);
        }

        // Moves Up
        for (let i = 10; i < 90; i += 10) {
        let option = currentPos - i;
        if (option > 10 && document.getElementById(option.toString()).src == "")
            NextMoveArray.push(option);
        if (option > 10 && document.getElementById(option.toString()).src != "") {
            this.checkCapture(option);
            break;
        }
        }

        // Moves Left
        for (let i = 1; i < 9; i += 1) {
        let option = currentPos - i;
        if (
            option > Math.floor(currentPos / 10) * 10 &&
            option < Math.floor(currentPos / 10) * 10 + 9 &&
            document.getElementById(option.toString()).src == ""
        )
            NextMoveArray.push(option);
        if (
            option > Math.floor(currentPos / 10) * 10 &&
            option < Math.floor(currentPos / 10) * 10 + 9 &&
            document.getElementById(option.toString()).src != ""
        ) {
            this.checkCapture(option);
            break;
        }
        }

        // Moves Right
        for (let i = 1; i < 9; i += 1) {
        let option = currentPos + i;
        if (
            option > Math.floor(currentPos / 10) * 10 &&
            option < Math.floor(currentPos / 10) * 10 + 9 &&
            document.getElementById(option.toString()).src == ""
        )
            NextMoveArray.push(option);
        if (
            option > Math.floor(currentPos / 10) * 10 &&
            option < Math.floor(currentPos / 10) * 10 + 9 &&
            document.getElementById(option.toString()).src != ""
        ) {
            this.checkCapture(option);
            break;
        }
        }

        let bishopMoves = [9, -9, 11, -11];

        for (let i = 0; i < bishopMoves.length; i++) {
        let option = currentPos;
        option += bishopMoves[i];

        var check = this.boardcheck(option);
        if (!check) {
            continue;
        }

        do {
            if (document.getElementById(option.toString()).src == "") {
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
        // this.clean();
        let moves = this.getValidMoves();
        this.clean();
        console.log(checkarray);
        for(var i = 0; i<moves.length;i++){
            if(!(checkarray.includes(moves[i]))){
                this.validMoves.push(moves[i]);
            }
       }
       if(checkarray.includes(checkopponentpos)){this.validMoves.push(checkopponentpos)}

        moveOptions = this.validMoves;
        return this.validMoves;
    }
}