class Board {
    constructor(pieces) {
        this.pieces = pieces;
        this.boardHTML = null;
    }

    renderBoard() {
        this.boardHTML = `<table class="ChessBoard">
        <tr>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="11"></div></td>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="12"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="13"></div></td>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="14"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="15"></div></td>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="16"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="17"></div></td>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="18"></div></td>
        </tr>
        <tr>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="21" ></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="22"></div></td>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="23"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="24"></div></td>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="25"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="26"></div></td>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="27"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="28"></div></td>
        </tr>
        <tr>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="31"></div></td>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="32"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="33"></div></td>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="34"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="35"></div></td>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="36"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="37"></div></td>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="38"></div></td>
        </tr>
        <tr>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="41"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="42"></div></td>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="43"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="44"></div></td>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="45"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="46"></div></td>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="47"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="48"></div></td>
        </tr>
        <tr>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="51"></div></td>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="52"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="53"></div></td>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="54"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="55"></div></td>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="56"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="57"></div></td>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="58"></div></td>
        </tr>
        <tr>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="61"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="62"></div></td>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="63"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="64"></div></td>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="65"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="66"></div></td>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="67"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="68"></div></td>
        </tr>
        <tr>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="71"></div></td>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="72"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="73"></div></td>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="74"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="75"></div></td>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="76"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="77"></div></td>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="78"></div></td>
        </tr>
        <tr>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="81"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="82"></div></td>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="83"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="84"></div></td>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="85"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="86"></div></td>
            <td><div class="BlackDimension BlackBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="87"></div></td>
            <td><div class="BoardBlock" onclick="makeMove(this)"><img onclick="select(this.id)" id="88"></div></td>
        </tr>

    </table>`;

        document.getElementsByClassName("Board_div")[0].innerHTML = this.boardHTML;
        for (let i = 0; i < this.pieces.length; i++) {
            let piece = this.pieces[i];
            document.getElementById(piece.getPosition()).src = piece.getSource();
        }
    }

    update(board){
        this.boardHTML = board;
        document.getElementsByClassName("Board_div")[0].innerHTML = this.boardHTML;
        for (let i = 0; i < this.pieces.length; i++) {
            let piece = this.pieces[i];
            document.getElementById(piece.getPosition()).src = piece.getSource();
        }
    }
}