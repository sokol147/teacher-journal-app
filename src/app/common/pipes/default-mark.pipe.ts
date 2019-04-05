import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultMark'
})
export class DefaultMarkPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return (isNaN(value)) ? '-' : value
  }

}
