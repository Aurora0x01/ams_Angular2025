import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
universityName: string = "Sesame University";
students: string[]= ["alice", "bob", "charlie", "david"];
nbrOfStudents: number = 26;
srcLogo: string = "link image";

display(){
  alert("Hello World!");
}
}
