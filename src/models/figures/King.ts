import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";

export class King extends Figure{
    constructor(color:Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target))
            return false

        const dX = Math.abs(this.cell.x - target.x)
        const dY = Math.abs(this.cell.y - target.y)

        return (dX === 1 && dY === 1) || (dX === 1 && dY === 0) || (dX === 0 && dY === 1)



    }
}