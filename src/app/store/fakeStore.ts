import { BehaviorSubject, Observable } from "rxjs";

export class fakeStore<T> {
  private state: BehaviorSubject<T> = new BehaviorSubject(undefined);

  public setState(data: T) {
    this.state.next(data);
  }

  public select(selector?: any): Observable<T> {
    return this.state.asObservable();
  }

  public despatch(action: any) {}
}
