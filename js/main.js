let chessArray = new Array();
let moveOptions = new Array();
let oldSelectedPiece = null;
let selectedPiece = null;
let piece;
let oldPiece = null;
let captured = false;

function clearValidMoves() {
    for (let i = 0; i < chessArray.length; i++) {
        if (chessArray[i].getPosition() == oldSelectedPiece) {
            let selectedPiece = chessArray[i].getMoveArray()
            for (let j = 0; j < selectedPiece.length; j++) {
                if (document.getElementById(selectedPiece[j]).parentElement.className == "BlackDimension BlackBlock") {
                    document.getElementById(selectedPiece[j]).parentElement.style.background = "gray";
                } else {
                    document.getElementById(selectedPiece[j]).parentElement.style.background = "white";
                }
            }
        }
    }
    moveOptions = new Array();
    piece.validMoves = new Array();
}

function capture(){
    console.log("this is what is eating -- " + oldPiece.source);
    console.log("this is being eaten --- " + piece.source);
    if(moveOptions.includes(parseInt(piece.position, 10))){
        console.log("yes can eat");
        document.getElementById(piece.position).removeAttribute("src");
        document.getElementById(oldPiece.position).removeAttribute("src");
        document.getElementById(piece.position).src = oldPiece.source;
        const index = chessArray.indexOf(piece);
        piece = oldPiece;
        if (index > -1) {
            chessArray.splice(index, 1);
        }
        return true;
    }else{
        console.log("no cant eat");
    }
    // console.log("--what i want to eat" + position);
}

function clearMoveMade() {
    for (let i = 0; i < moveOptions.length; i++) {
        if (document.getElementById(moveOptions[i].toString()).parentElement.className == "BlackDimension BlackBlock") {
            document.getElementById(moveOptions[i].toString()).parentElement.style.background = "gray";
        } else {
            document.getElementById(moveOptions[i].toString()).parentElement.style.background = "white";
        }
    }
}

function movePiece(element, childId) {
    document.getElementById(piece.position).removeAttribute("src");
    if(!captured){
        document.getElementById(childId).src = piece.source;
    }else{
        document.getElementById(childId).src = oldPiece.source;
    }
    
    clearMoveMade();
    piece.position = childId;
    piece.default = false;
    piece.clean();
    moveOptions = new Array();
}

function makeMove(element) {
    // if()
    let childId = parseFloat(element.childNodes[0].id);
    if (moveOptions.includes(childId)) {
        movePiece(element, childId);
        moveOptions = new Array();
        piece.moveOptions = new Array();
    } else {
        console.log("can't move there");
    }
}

function load() {

    let blackPawn0 = new Pawn("21", "./../Pieces/Black/bP.png", "black");
    let blackPawn1 = new Pawn("22", "./../Pieces/Black/bP.png", "black");
    let blackPawn2 = new Pawn("23", "./../Pieces/Black/bP.png", "black");
    let blackPawn3 = new Pawn("24", "./../Pieces/Black/bP.png", "black");
    let blackPawn4 = new Pawn("25", "./../Pieces/Black/bP.png", "black");
    let blackPawn5 = new Pawn("26", "./../Pieces/Black/bP.png", "black");
    let blackPawn6 = new Pawn("27", "./../Pieces/Black/bP.png", "black");
    let blackPawn7 = new Pawn("28", "./../Pieces/Black/bP.png", "black");

    let whitePawn0 = new Pawn("71", "./../Pieces/White/wP.png", "white");
    let whitePawn1 = new Pawn("72", "./../Pieces/White/wP.png", "white");
    let whitePawn2 = new Pawn("73", "./../Pieces/White/wP.png", "white");
    let whitePawn3 = new Pawn("74", "./../Pieces/White/wP.png", "white");
    let whitePawn4 = new Pawn("75", "./../Pieces/White/wP.png", "white");
    let whitePawn5 = new Pawn("76", "./../Pieces/White/wP.png", "white");
    let whitePawn6 = new Pawn("77", "./../Pieces/White/wP.png", "white");
    let whitePawn7 = new Pawn("78", "./../Pieces/White/wP.png", "white");

    let blackRook1 = new Rook("11", "./../Pieces/Black/bR.png", "black");
    let blackRook2 = new Rook("18", "./../Pieces/Black/bR.png", "black");

    let whiteRook1 = new Rook("81", "./../Pieces/White/wR.png", "white");
    let whiteRook2 = new Rook("88", "./../Pieces/White/wR.png", "white");

    let blackKnight1 = new Knight("12", "./../Pieces/Black/bN.png", "black");
    let blackKnight2 = new Knight("17", "./../Pieces/Black/bN.png", "black");

    let whiteKnight1 = new Knight("82", "./../Pieces/White/wN.png", "white");
    let whiteKnight2 = new Knight("87", "./../Pieces/White/wN.png", "white");

    let blackBishop1 = new Bishop("13", "./../Pieces/Black/bB.png", "black");
    let blackBishop2 = new Bishop("16", "./../Pieces/Black/bB.png", "black");

    let whiteBishop1 = new Bishop("83", "./../Pieces/White/wB.png", "white");
    let whiteBishop2 = new Bishop("86", "./../Pieces/White/wB.png", "white");

    let blackQueen1 = new Queen("14", "./../Pieces/Black/bQ.png", "black");

    let whiteQueen1 = new Queen("84", "./../Pieces/White/wQ.png", "white");

    let blackKing1 = new King("15", "./../Pieces/Black/bK.png", "black"
    );

    let whiteKing1 = new King("85", "./../Pieces/White/wK.png", "white");

    chessArray.push(blackPawn0);
    chessArray.push(blackPawn1);
    chessArray.push(blackPawn2);
    chessArray.push(blackPawn3);
    chessArray.push(blackPawn4);
    chessArray.push(blackPawn5);
    chessArray.push(blackPawn6);
    chessArray.push(blackPawn7);

    chessArray.push(whitePawn0);
    chessArray.push(whitePawn1);
    chessArray.push(whitePawn2);
    chessArray.push(whitePawn3);
    chessArray.push(whitePawn4);
    chessArray.push(whitePawn5);
    chessArray.push(whitePawn6);
    chessArray.push(whitePawn7);

    chessArray.push(blackRook1);
    chessArray.push(blackRook2);

    chessArray.push(whiteRook1);
    chessArray.push(whiteRook2);

    chessArray.push(blackKnight1);
    chessArray.push(blackKnight2);

    chessArray.push(whiteKnight1);
    chessArray.push(whiteKnight2);

    chessArray.push(blackBishop1);
    chessArray.push(blackBishop2);

    chessArray.push(whiteBishop1);
    chessArray.push(whiteBishop2);

    chessArray.push(blackKing1);

    chessArray.push(whiteKing1);

    chessArray.push(blackQueen1);

    chessArray.push(whiteQueen1);

    let board = new Board(chessArray);
    board.renderBoard();

    // for(let i = 0; i < chessArray.length; i++){
    //     let piece = chessArray[i];
    //     document.getElementById(piece.getPosition()).src = piece.getSource();
    // }
}
let first = true;

function select(position) {
    let found = false;
    captured = false;
    for (let i = 0; i < chessArray.length; i++) {
        if(first){
            if (chessArray[i].getPosition() == position) {
                piece = chessArray[i];
                first = false;
                found = true;
                break;
            }
        }else if(!first){
            if (chessArray[i].getPosition() == position) {
                oldPiece = piece;
                piece = chessArray[i];
            }
        }
        
    }

    if(oldPiece != null){
        captured = capture();
    }
    if(!captured){
        piece.getValidMoves();
    }
    
    console.log(piece);
}