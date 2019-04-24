import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory } from "@angular/core";

import { MessageComponent } from "../components/message/message.component";

import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  @ViewChild("messagecontainer", {read: ViewContainerRef}) public entry: ViewContainerRef;

  public title: string = "Teacher Journal";

  public componentRef: any;

  constructor(
    private translate: TranslateService,
    private resolver: ComponentFactoryResolver
  ) {
    translate.setDefaultLang("en");
  }

  public useLanguage(language: string): void {
    this.translate.use(language);
  }

  public createComponent(message: string, type: string): void {
    this.entry.clear();
    const factory: any = this.resolver.resolveComponentFactory(MessageComponent);
    this.componentRef = this.entry.createComponent(factory);
    this.componentRef.instance.message = message;
    this.componentRef.instance.type = type;
    setTimeout(() => {
      this.destroyComponent();
    },         5000);
  }

  public destroyComponent(): void {
    this.componentRef.destroy();
  }
}
