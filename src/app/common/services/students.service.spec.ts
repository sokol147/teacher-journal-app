import { StudentService } from "./students.service";
import { STUDENTS } from "../../mock-students";
import { TestBed } from "@angular/core/testing";
import { Store } from "@ngrx/store";
import { fakeStore } from "src/app/store/fakeStore";
import { AppComponent } from "src/app/root/app.component";
import { TranslateService } from "@ngx-translate/core";

const fakeTranslateService = {
  instant: (value) => value,
  setDefaultLang: () => {}
};

describe("StudentService", () => {
  let service: StudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentService, AppComponent,
        { provide: Store, useValue: fakeStore },
        { provide: TranslateService, useValue: fakeTranslateService }
      ]
    });

    service = TestBed.get(StudentService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

});
