class Piece {
    constructor(position, source, type) {
        this.position = position;
        this.source = source;
        this.type = type;
        this.default = true;
        this.validMoves = new Array();
        this.NextMove = new Array()
    }
    getPosition() {
        return this.position;
    }

    setPosition(newPos) {
        this.position = newPos;
    }
	
	setDefault(bool){
		this.default = bool;
	}

    getSource() {
        return this.source
    }

    highlightMoves(validMoves) {
        for (let i = 0; i < validMoves.length; i++)
            document.getElementById(validMoves[i]).parentElement.style.background = "#bfbc9f";
    }

    getMoveArray() {
        return this.validMoves;
    }

	getType(){
		return this.type;
	}

    clean() {
        this.validMoves = new Array();
    }

    checkCapture(position){
        var imgSrc = document.getElementById(position.toString()).src;
        switch(this.type){
            case "black":
                if(imgSrc.includes("Pieces/White/")){
                    this.getMoveArray().push(position);
                }
                break;
            case "white":
                if(imgSrc.includes("Pieces/Black/")){
                    this.getMoveArray().push(position);
                }
                break;
        }
    }
    
}