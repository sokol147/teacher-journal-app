import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "translate"})
export class FakeTranslatePipe implements PipeTransform {
  public transform(value: string) { return value; }
}
