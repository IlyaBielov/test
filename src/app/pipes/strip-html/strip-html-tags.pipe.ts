import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripHtmlTags'
})
export class StripHtmlTagsPipe implements PipeTransform {
  transform(value: string): any {
    if (value) {
      return value.replace(/<.*?>/g, ''); // replace tags
    }
  }
}
