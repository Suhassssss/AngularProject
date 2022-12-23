import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spRemove'
})
export class SpRemovePipe implements PipeTransform {

  transform(val: string): string {
    let stringArr = val.split(" ");
    let rmspString="";
    let count = 0;
    for (const iterator of stringArr) {
      if(count==0){
        rmspString = rmspString.concat(iterator);
      }else{
       rmspString =  rmspString.concat("_",iterator);
      }
      count++;
      // rmspString = rmspString.concat("Suhasss");
    }
    
    return rmspString.toString();
  }

}
