import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'checkDuplicateLetters'
})
export class CheckDuplicateLettersPipe implements PipeTransform {

  transform(text: string): any {
    if (text) {
      const regex = new RegExp('[a-zA-Z]+', 'g');
      const matchedSites = Array.from(text.toLocaleLowerCase()).filter(data => data.match(regex));
      return this.compressArray(matchedSites);
    } else {
      return null;
    }
  }

  compressArray(original) {
    let obj = {};
    const copy = original.slice(0);

    for (let i = 0; i < original.length; i++) {
      let myCount = 0;
      for (let w = 0; w < copy.length; w++) {
        if (original[i] === copy[w]) {
          myCount++;
          delete copy[w];
        }
      }

      if (myCount > 0) {
        obj = {
          ...obj,
          [original[i]]: ((myCount / original.length) * 100).toFixed(2),
        };
      }
    }
    return obj;
  }
}
