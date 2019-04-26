import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sortingStudents'})
export class FakeSortingStudentsPipe implements PipeTransform {
  transform(value: string) { return value }
}