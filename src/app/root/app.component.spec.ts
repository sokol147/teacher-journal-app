import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { TranslateService, TranslatePipe } from "@ngx-translate/core";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { AppModule } from "../app.module";
import { FakeTranslatePipe } from "../common/pipes/fake-translate.pipe";

const fakeTranslateService = {
  instant: (value) => "there was no",
  setDefaultLang: () => {},
  get: () => {}
};

describe("AppComponent", () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [AppComponent,
        { provide: TranslateService, useValue: fakeTranslateService }
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css(".header"));
    el = de.nativeElement;
  });

  it("should have title", () => {
    expect(component.title).toBe("Teacher Journal");
  });
});
