import { Action } from "@ngrx/store";
import { ISubject } from "../../common/entities";

export enum ESubjectActions {
  AddSubject = "[Subject] Add Subject",
  GetSubject = "[Subject] Get Subject",
  GetSubjectSuccess = "[Subject] Get Subject Success"
}

export class AddSubject implements Action {
  public readonly type: string = ESubjectActions.AddSubject;
  constructor(public payload: ISubject) {}
}

export class GetSubject implements Action {
  public readonly type: string = ESubjectActions.GetSubject;
  constructor(public payload) {}
}

export class GetSubjectSuccess implements Action {
  public readonly type: string = ESubjectActions.GetSubjectSuccess;
  constructor(public payload: ISubject) {}
}

export type SubjectActions = GetSubject | GetSubjectSuccess | AddSubject;
