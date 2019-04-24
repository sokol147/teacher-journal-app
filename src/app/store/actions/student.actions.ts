import { Action } from "@ngrx/store";
import { IStudent } from "../../common/entities";

export enum EStudentActions {
  AddStudent = "[Student] Add Student"
}

export class AddStudent implements Action {
  public readonly type: string = EStudentActions.AddStudent;
  constructor(public payload: IStudent) {}
}

export type StudentActions = AddStudent;
