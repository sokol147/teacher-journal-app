import { Component, Input } from "@angular/core";

import { Button } from "../../../common/entities";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent {

  @Input() public type: Button;

  public text: string = "";

  constructor() {}

  public ngOnInit(): void {
    switch (this.type.class) {
      case "btn--add":
        this.text = "+";
        break;
      case "btn--save":
        this.text = "save";
        break;
      case "btn--plus":
        this.text = "+";
        break;
      default:
        this.text = "";
    }
  }

}
