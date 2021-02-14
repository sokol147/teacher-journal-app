import { FormComponent } from "./form.component";

describe("FormComponent", () => {

  let value = {
    address: "",
    cabinet: "",
    description: "",
    lastName: "",
    name: "",
    teacher: ""
  };

  it("raise the submit event when form submited", () => {
    const comp = new FormComponent();

    comp.submitted.subscribe(d => expect(d).toBe(value));
    comp.onSubmit(value);
  });
});
