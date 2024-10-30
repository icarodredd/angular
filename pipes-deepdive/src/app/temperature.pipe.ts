import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "temp",
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(value: string | number) {
    let temp: number;

    if (typeof value === "string") {
      temp = parseFloat(value);
    } else {
      temp = value;
    }

    const outTemp = temp * (9 / 5) + 32;
    return outTemp + "F";
  }
}
