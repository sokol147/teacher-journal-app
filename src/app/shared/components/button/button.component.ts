import { Component, Input } from "@angular/core";

import { IButton } from "../../../common/entities";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent {

  @Input() public type: IButton;

  public text: string = "";

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
