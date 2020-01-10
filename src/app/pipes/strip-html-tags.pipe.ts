import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripHtmlTags'
})
export class StripHtmlTagsPipe implements PipeTransform {
  transform(value: string): any {
    return value.replace(/<.*?>/g, ''); // replace tags
  }
}
