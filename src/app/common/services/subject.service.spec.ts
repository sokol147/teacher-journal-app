import { TestBed } from "@angular/core/testing";

import { SubjectService } from "./subjects.service";

describe("SubjectService", () => {
  let service: SubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubjectService]
    });

    service = TestBed.get(SubjectService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

});
