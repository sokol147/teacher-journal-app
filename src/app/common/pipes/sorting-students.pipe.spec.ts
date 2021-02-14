import { SortingStudentsPipe } from "./sorting-students.pipe";
import { STUDENTS } from "src/app/mock-students";

describe("SortingStudentPipe", () => {
  let pipe = new SortingStudentsPipe();

  it("should return Students sorted by id", () => {
    expect(pipe.transform(STUDENTS, ["id"], 1)).toBe(STUDENTS);
  });

  it("should return Students sorted by id from last to first", () => {
    expect(pipe.transform(STUDENTS, ["id"], -1)).toBe(STUDENTS.reverse());
  });

  it("should return Students", () => {
    expect(pipe.transform(STUDENTS, null, null)).toBe(STUDENTS);
  });
});
