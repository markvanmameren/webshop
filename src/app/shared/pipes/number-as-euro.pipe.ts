import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'numberAsEuro',
})
export class NumberAsEuroPipe implements PipeTransform {
  public transform(value: number): string {
    return Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
    }).format(value)
  }
}
