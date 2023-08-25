import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squareRoot',
  pure: true
})
export class SquareRootPipe implements PipeTransform {

  transform(value: number, args: number = null): number {
    return Math.sqrt(value);
  }

}
