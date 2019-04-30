import { TestBed, ComponentFixture } from "@angular/core/testing";
import { StudentsComponent } from "./students.component";
import { StudentService } from "../../common/services/students.service";
import { FakeTranslatePipe } from "src/app/common/pipes/fake-translate.pipe";
import { FakeSortingStudentsPipe } from "src/app/common/pipes/fake-sorting-students.pipe";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { fakeStore } from "src/app/store/fakeStore";
import { Store } from "@ngrx/store";
import { AppComponent } from "src/app/root/app.component";
import { TranslateService } from "@ngx-translate/core";
import { of } from "rxjs";

const fakeTranslateService = {
  instant: (value) => "there was no",
  setDefaultLang: () => {}
};

describe("StudentsComponent", () => {
  let fixture: ComponentFixture<StudentsComponent>;
  let component: StudentsComponent;
  let studentService: StudentService;
  let studentServiceStab: Partial<StudentService>;

  beforeEach(() => {

    studentServiceStab = {
      getStudents: () => {
        return of();
      }
    };

    TestBed.configureTestingModule({
      declarations: [StudentsComponent, FakeTranslatePipe, FakeSortingStudentsPipe],
      providers: [ AppComponent,
        { provide: StudentService, useValue: studentServiceStab },
        { provide: Store, useValue: fakeStore },
        { provide: TranslateService, useValue: fakeTranslateService}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.componentInstance;
    studentService = fixture.debugElement.injector.get(StudentService);
  });

  it("initial students value should be undefine", () => {
    expect(component.students).toBeUndefined();
  });

  it("stub object and injecred StudentService shoul no be the same", () => {
    expect(studentServiceStab === studentService).toBe(false);
  });

  it("sort function should return false", () => {
    expect(component.sortTable("id")).toBe(false);
  });

  it("should load data after init", () => {
    expect(component.students).toBeUndefined();
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.students).toBeTruthy();
  });
});
