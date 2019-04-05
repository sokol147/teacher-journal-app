import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "partyTime"
})
export class PartyTimePipe implements PipeTransform {

  public transform(str: string ): string {
    if (str === undefined) { return str; }
    return str.split("").reverse().join("");
  }

}
