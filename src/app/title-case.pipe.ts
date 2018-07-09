import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null;

    const words = value.split(' ');
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (this.isPreposition(word) && i > 0)
        words[i] = word.toLowerCase();
      else
        words[i] = this.toTitleCase(word);
    }

    return words.join(' ');
  }

  private isPreposition(word: string): boolean {
    const prepositions = ['of', 'the'];
    if (prepositions.includes(word.toLowerCase())) return true;
    return false;
  }

  private toTitleCase(word: string): string {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  }

}
