import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeTags'
})
export class RemoveTagsPipe implements PipeTransform {
  transform(value: string): any {
    return value.replace(/<.*?>/g, ''); // replace tags
  }
}
