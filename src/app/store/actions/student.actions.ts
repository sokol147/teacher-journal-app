import { Action } from "@ngrx/store";
import { Student } from "../../common/entities";

export enum EStudentActions {
  AddStudent = '[Student] Add Student'
}

export class AddStudent implements Action {
  public readonly type = EStudentActions.AddStudent;
  constructor(public payload: Student) {}
}

export type StudentActions = AddStudent;
