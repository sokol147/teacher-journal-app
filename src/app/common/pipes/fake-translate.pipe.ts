import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'translate'})
export class FakeTranslatePipe implements PipeTransform {
  transform(value: string) { return value }
}