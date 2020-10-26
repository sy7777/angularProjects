import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value, ...args: any[]){
    const time = new Date();
    time.setTime(value);
    return time
  }

}
