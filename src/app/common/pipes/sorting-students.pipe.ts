import { Pipe, PipeTransform } from "@angular/core";
import { IStudent } from "../../common/entities";

@Pipe({
  name: "sortingStudents"
})
export class SortingStudentsPipe implements PipeTransform {

  public transform(students: IStudent[], path: string[], order: number): IStudent[] {
    if (!students || !path || !order) { return students; }

    return students.sort((a: IStudent, b: IStudent) => {
      path.forEach(property => {
        a = a[property];
        b = b[property];
      });
      return a > b ? order : order * (- 1);
    });
  }

}
