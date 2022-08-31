import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strings'
})
export class StringsPipe implements PipeTransform {

  transform(strValue:string[]): string {

    if (strValue!=undefined) {
      return strValue.join(" / ");

    }

  }

}
