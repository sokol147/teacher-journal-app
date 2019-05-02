import { DefaultMarkPipe } from "./default-mark.pipe";

describe("DefaultMarkPipe", () => {
  let pipe = new DefaultMarkPipe();

  it('should transform "NaN" to "-"', () => {
    expect(pipe.transform(NaN)).toBe("-");
  });

  it("should return value", () => {
    expect(pipe.transform(10)).toBe(10);
  });

});
