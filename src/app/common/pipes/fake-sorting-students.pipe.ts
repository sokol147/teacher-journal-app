import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "sortingStudents"})
export class FakeSortingStudentsPipe implements PipeTransform {
  public transform(value: string): string { return value; }
}
