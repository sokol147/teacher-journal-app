import { Action } from "@ngrx/store";
import { Subject } from "../../common/entities";

export enum ESubjectActions {
  AddSubject = '[Subject] Add Subject',
  GetSubject = '[Subject] Get Subject',
  GetSubjectSuccess = '[Subject] Get Subject Success'
}

export class AddSubject implements Action {
  public readonly type = ESubjectActions.AddSubject;
  constructor(public payload: Subject) {}
}

export class GetSubject implements Action {
  public readonly type = ESubjectActions.GetSubject;
  constructor(public payload: string) {}
}

export class GetSubjectSuccess implements Action {
  public readonly type = ESubjectActions.GetSubjectSuccess;
  constructor(public payload: Subject) {}
}

export type SubjectActions = AddSubject | GetSubject | GetSubjectSuccess;
