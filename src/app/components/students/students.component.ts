import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students = [
    {id: 1, name: 'Vasya', lastName: 'Notvasya', address: 'st.Maks 14', description: 'Live in...'},
    {id: 2, name: 'Luck', lastName: 'Oms', address: 'st.Stir 48', description: 'Have a power'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
