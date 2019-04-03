import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { Subject, Button } from 'src/app/common/entities';

import { SubjectService } from '../../common/services/subjects.service'
import { StudentService } from '../../common/services/students.service'

@Component({
  selector: "app-subject-table",
  templateUrl: "./subject-table.component.html",
  styleUrls: ["./subject-table.component.scss"]
})
export class SubjectTableComponent implements OnInit {

  button: Button = {
    text: 'save',
    class: 'btn--save'
  }

  thead: string[] = ['Name', 'Last Name', 'Averege mark'];

  subject: Subject;

  studentsList:any[] = [];

  constructor(
    private route: ActivatedRoute,
    private subjectsService: SubjectService,
    private studentsService: StudentService
  ){}

  public ngOnInit(): void {
    this.getSubject();
    this.getStudents();
  }

  getStudents():void {
    this.studentsService.getStudents()
      .subscribe(students => {
        students.forEach((student) => {
          this.studentsList.push([
            student.name,
            student.lastName,
            0
          ])
        })
      })
  }

  getSubject():void {
    const name = this.route.snapshot.paramMap.get('name');
    this.subjectsService.getSubject(name)
      .subscribe(subject => this.subject = subject);
  }

  addDay(): void{
    this.thead.push('Enter Date');
    this.studentsList.forEach(student => student.push(''))
    console.log(this.studentsList)
  }

}
