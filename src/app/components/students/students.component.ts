import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../../common/entities/index';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() students: Student[];
}
