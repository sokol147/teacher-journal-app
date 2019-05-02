import { SubjectService } from "./subjects.service";
import { SUBJECTS } from "../../mock-subjects";

describe("SubjectService without the TestBed", () => {
  let service: SubjectService;

  beforeEach(() => {
    service = new SubjectService();
  });

  it("getCurrentDate should return observable value", (done: DoneFn) => {
    service.getCurrentDate().subscribe(data => {
      expect(data).toBe("04/29");
      done();
    });
  });

  it("getSubjects should return observable value", (done: DoneFn) => {
    service.getSubjects().subscribe(data => {
      expect(data).toBe(SUBJECTS);
      done();
    });
  });
});
