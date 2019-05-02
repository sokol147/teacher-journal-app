import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentsComponent } from "./components/students/students.component";
import { SubjectsComponent } from "./components/subjects/subjects.component";
import { SubjectTableComponent } from "./components/subject-table/subject-table.component";
import { StatisticComponent } from "./components/statistic/statistic.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ExportComponent } from './components/export/export.component';

const routes: Routes = [
  { path: "", redirectTo: "/students", pathMatch: "full"},
  { path: "students", component: StudentsComponent },
  { path: "subjects", component: SubjectsComponent },
  { path: "export", component: ExportComponent},
  { path: "subject/:name", component: SubjectTableComponent },
  { path: "statistic", component: StatisticComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
