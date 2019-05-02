import { MessageComponent } from "./message.component";

describe("MessageComponent", () => {
  let comp = new MessageComponent();

  it("should return message", () => {
    const message = "Student successfuly added";
    comp.message = message;

    expect(comp.message).toBe("Student successfuly added");
  });
});
