import { Component, Input } from "@angular/core";

import { IButton, ButtonType } from "./button.model";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {

  @Input() public type: IButton;

  public text: string = "";

  constructor(private tsService: TranslateService) {}

  public ngOnInit(): void {
    switch (this.type.class) {
      case ButtonType.Add:
        this.text = "+";
        break;
      case ButtonType.Save:
        this.text = this.tsService.instant("buttonsave");
        break;
      case ButtonType.Plus:
        this.text = "+";
        break;
      default:
        this.text = "";
    }
  }
}
