import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private santi:DomSanitizer){}
  transform(value: string, ...args: unknown[]): SafeHtml {
    return this.santi.bypassSecurityTrustHtml(value);
  }

}
