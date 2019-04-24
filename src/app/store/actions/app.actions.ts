import { Action } from "@ngrx/store";
import { IStudent, ISubject } from "../../common/entities";

export const ADD_STUDENT: string = "[STUDENT] Add Student";
export const ADD_SUBJECT: string = "[SUBJECT] Add Subject";

export class AddStudent implements Action {
  public readonly type: string = ADD_STUDENT;
  constructor(public payload: IStudent) {}
}

export class AddSubject implements Action {
  public readonly type: string = ADD_SUBJECT;
  constructor(public payload: ISubject) {}
}

export type Actions = AddStudent | AddSubject;
