import { Action } from "@ngrx/store";
import { Student, Subject } from "../../common/entities";

export const ADD_STUDENT: string = "[STUDENT] Add Student";
export const ADD_SUBJECT: string = "[SUBJECT] Add Subject";

export class AddStudent implements Action {
  public readonly type = ADD_STUDENT;
  constructor(public payload) {}
}

export class AddSubject implements Action {
  public readonly type = ADD_SUBJECT;
  constructor(public payload: Subject) {}
}

export type Actions = AddStudent | AddSubject;
