import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'actorage'
})
export class ActoragePipe implements PipeTransform {

  transform(value: number): number {
    let currentYear = new Date().getFullYear();
    return currentYear - value;
  }

}
