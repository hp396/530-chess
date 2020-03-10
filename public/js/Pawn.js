class Pawn extends Piece{
    constructor(position, source, type) {
        super(position,source,type);
    }

    checkCapture(){
        let currentPos = Number(this.position);
        if (selectedPiece != this.position) {
            oldSelectedPiece = selectedPiece;
            selectedPiece = this.position;
            clearValidMoves();
            this.clean();
        }
        if(this.type == "black"){
            if(((currentPos + 9) < (Math.floor((currentPos+10) / 10) * 10 + 9)) && (currentPos + 9) > (Math.floor((currentPos+10) / 10) * 10)){
                if(document.getElementById((currentPos + 9).toString()).src != "" && document.getElementById((currentPos + 9).toString()).src.includes("/Pieces/White/")){
                    this.getMoveArray().push(currentPos + 9);
                }
            }
            if(((currentPos + 11) < (Math.floor((currentPos+10) / 10) * 10 + 9)) && (currentPos + 11) > (Math.floor((currentPos+10) / 10) * 10)){
                if(document.getElementById(currentPos + 11).toString().src != "" && document.getElementById((currentPos + 11).toString()).src.includes("/Pieces/White/")){
                    this.getMoveArray().push(currentPos + 11);
                }
            }
        }else{
            if(((currentPos - 9) < (Math.floor((currentPos-10) / 10) * 10 + 9)) && (currentPos - 9) > (Math.floor((currentPos-10) / 10) * 10)){
                if(document.getElementById((currentPos - 9).toString()).src != "" && document.getElementById((currentPos - 9).toString()).src.includes("/Pieces/Black/")){
                    this.getMoveArray().push(currentPos - 9);
                }
            }
            if(((currentPos - 11) < (Math.floor((currentPos-10) / 10) * 10 + 9)) && (currentPos - 11) > (Math.floor((currentPos-10) / 10) * 10)){
                if(document.getElementById(currentPos - 11).toString().src != "" && document.getElementById((currentPos - 11).toString()).src.includes("/Pieces/Black/")){
                    this.getMoveArray().push(currentPos - 11);
                }
            }
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
        if (this.type == "black") {
            if (this.default) {

                if (document.getElementById((currentPos + 10).toString()).src == "" && document.getElementById((currentPos + 20).toString()).src == "") {
                    this.getMoveArray().push(currentPos += 10, currentPos += 10);
                } else if (document.getElementById((currentPos + 20).toString()).src != "" && document.getElementById((currentPos + 10).toString()).src == "") {
                    this.getMoveArray().push(currentPos += 10);
                }
            } else {
                if (document.getElementById((currentPos + 10).toString()).src == "") {
                    this.getMoveArray().push(currentPos += 10);
                }
            }
        } else {
            if (this.default) {
                if (document.getElementById((currentPos - 10).toString()).src == "" && document.getElementById((currentPos - 20).toString()).src == "") {
                    this.getMoveArray().push(currentPos -= 10, currentPos -= 10);
                } else if (document.getElementById((currentPos - 20).toString()).src != "" && document.getElementById((currentPos - 10).toString()).src == "") {
                    this.getMoveArray().push(currentPos -= 10);
                }
            } else {
                if (document.getElementById((currentPos - 10).toString()).src == "") {
                    this.getMoveArray().push(currentPos -= 10);
                }
            }
        }
        this.checkCapture();
        moveOptions = this.getMoveArray();
        return this.getMoveArray();
        // this.highlightMoves(this.getMoveArray());
    }


    getNextValidMoves(Pawn) {
       
        let NextMoveArray = new Array();
        let currentPos = Number(Pawn.position);
        if (selectedPiece != Pawn.position) {
            oldSelectedPiece = selectedPiece;
            selectedPiece = Pawn.position;
            clearValidMoves();
            this.clean();
        }
        if (Pawn.type == "black") {
            if (((currentPos + 9) < (Math.floor((currentPos + 10) / 10) * 10 + 9)) && (currentPos + 9) > (Math.floor((currentPos + 10) / 10) * 10)) {
                if (document.getElementById((currentPos + 9).toString()).src != "" && document.getElementById((currentPos + 9).toString()).src.includes("/Pieces/White/")) {
                    NextMoveArray.push(currentPos + 9);
                }
            }
            if (((currentPos + 11) < (Math.floor((currentPos + 10) / 10) * 10 + 9)) && (currentPos + 11) > (Math.floor((currentPos + 10) / 10) * 10)) {
                if (document.getElementById(currentPos + 11).toString().src != "" && document.getElementById((currentPos + 11).toString()).src.includes("/Pieces/White/")) {
                    NextMoveArray.push(currentPos + 11);
                }
            }
        } else {
            if (((currentPos - 9) < (Math.floor((currentPos - 10) / 10) * 10 + 9)) && (currentPos - 9) > (Math.floor((currentPos - 10) / 10) * 10)) {
                if (document.getElementById((currentPos - 9).toString()).src != "" && document.getElementById((currentPos - 9).toString()).src.includes("/Pieces/Black/")) {
                    NextMoveArray.push(currentPos - 9);
                }
            }
            if (((currentPos - 11) < (Math.floor((currentPos - 10) / 10) * 10 + 9)) && (currentPos - 11) > (Math.floor((currentPos - 10) / 10) * 10)) {
                if (document.getElementById(currentPos - 11).toString().src != "" && document.getElementById((currentPos - 11).toString()).src.includes("/Pieces/Black/")) {
                    NextMoveArray.push(currentPos - 11);
                }
            }
        }
        this.NextMove = NextMoveArray;
        return NextMoveArray;
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