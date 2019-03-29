import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'src/common/entities';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() subjects: Subject[];
}
