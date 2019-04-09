import { Component, OnInit, Input } from "@angular/core";

import { Button } from "../../../common/entities";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent implements OnInit {

  @Input() public type: Button;

  public ngOnInit(): void { }

}
