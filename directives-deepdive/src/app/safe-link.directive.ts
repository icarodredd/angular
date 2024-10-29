import { Directive } from "@angular/core";

@Directive({
  selector: "a[appSafeLink]",
  standalone: true,
  host: {
    "(click)": "onClick($event)",
  },
})
export class SafeLinkDirective {
  constructor() {}
  onClick(event: MouseEvent) {
    const wantsToLeave = window.confirm("Are you sure?");

    if (wantsToLeave) {
      return;
    }

    event?.preventDefault();
  }
}
