import {Circle} from "./circle";
import {Comparable} from "./comparable";

export class ComparableCircle extends Circle implements Comparable{
    constructor(radius:number) {
        super(radius);
    }
    compareTo(x:ComparableCircle):number{
        if (this.getRadius()>x.getRadius())
            return 1;
        else if (this.getRadius()<x.getRadius())
            return -1;
        else return 1

    }

    comparable(x: object): number {
        return 0;
    }
}