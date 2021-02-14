import { Component, Input } from "@angular/core";

import { IButton, ButtonType } from "./button.model";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {

  @Input() public type: IButton;

  public text: string = "";

  public ngOnInit(): void {
    switch (this.type.class) {
      case ButtonType.Add:
        this.text = "+";
        break;
      case ButtonType.Save:
        this.text = "save";
        break;
      case ButtonType.Plus:
        this.text = "+";
        break;
      default:
        this.text = "";
    }
  }
}
