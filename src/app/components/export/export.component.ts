import { Component, OnInit } from '@angular/core';
import { ExportService } from 'src/app/common/services/export.service';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { IStudent, ISubject } from 'src/app/common/entities';


@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent implements OnInit {

  constructor(
    private exportService: ExportService,
    private _store: Store<IAppState>
    ) { }

  students: IStudent[];
  subjects: ISubject[]

  ngOnInit() {
    this._store.select('students', 'students')
      .subscribe(data => this.students = data);

    this._store.select('subjects', 'subjects')
      .subscribe(data => this.subjects = data);
  }

  exportStudentsAsXLSX(): void {
    this.exportService.exportAsExcelFile(this.students, 'Student XLSX');
  }
  exportSubjectsAsXLSX(): void {
    this.exportService.exportAsExcelFile(this.subjects, 'Subject XLSX');
  }

  exportStudentsAsPDF(): void {
    this.exportService.exportAsPdfFile(this.students, 'Student PDF');
  }
  exportSubjectsAsPDF(): void {
    this.exportService.exportAsPdfFile(this.subjects, 'Subject PDF');
  }

}
