import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {}

  url: string = '/assets/members.json'
  members: any;
  newMember = {
    fname: '',
    lname: '',
    instrument: ''
  };

  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.members = res;
    });
  }

  addMember() {
    if (this.newMember.fname.trim().length > 0&&
      this.newMember.lname.trim().length > 0 &&
      this.newMember.instrument) {
        this.members.push(this.newMember);
        this.newMember = {
          fname: '',
          lname: '',
          instrument: ''
        }
      } else {
        alert("Preencha todos os campos.");
      }
  }

  
}
