import { TestBed, ComponentFixture } from "@angular/core/testing";
import { StatisticComponent } from "./statistic.component";
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FakeTranslatePipe } from "src/app/common/pipes/fake-translate.pipe";
import { TranslateService } from "@ngx-translate/core";
import { NgSelectModule } from "@ng-select/ng-select";

const fakeTranslateService = {
  instant: (value) => value,
  setDefaultLang: () => {}
};

describe("StatisticComponent", () => {
  let fixture: ComponentFixture<StatisticComponent>;
  let component: StatisticComponent;
  let de: DebugElement;
  let el: HTMLElement;

  let testObj = {
    id: 1,
    name: "test Object",
    teacher: "",
    cabinet: 12
  };

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, NgSelectModule],
      declarations: [StatisticComponent, FakeTranslatePipe],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: TranslateService, useValue: fakeTranslateService }
      ]
    });

    fixture = TestBed.createComponent(StatisticComponent);
    component = fixture.componentInstance;
  });

  it("should have empty result array", () => {
    expect(component.result).toEqual([]);
  });

  it("should have subjects array", () => {
    expect(component.subjects).toBeUndefined();
    localStorage.setItem("subjects", JSON.stringify([testObj]));
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.subjects).toBeTruthy();
  });
});
