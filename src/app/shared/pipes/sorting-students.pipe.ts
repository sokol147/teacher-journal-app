import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../../common/entities';

@Pipe({
  name: 'sortingStudents'
})
export class SortingStudentsPipe implements PipeTransform {

  transform(students: Student[], path: string[], order: number): Student[] {
    if(!students || !path || !order) return students;

    return students.sort((a: Student, b: Student) => {
      path.forEach(property => {
        a = a[property];
        b = b[property];
      })
      return a > b ? order : order * (- 1);
    })
  }

}
