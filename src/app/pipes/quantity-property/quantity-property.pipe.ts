import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'quantityProperty'
})
export class QuantityPropertyPipe implements PipeTransform {

  transform(value: object[], prop: string): number {
    if (value) {
      return value ? value.filter(x => x.hasOwnProperty(prop)).length : 0;
    }
  }
}
