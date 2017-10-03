import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  contactOptions = ["phone", "email"];

  ngOnInit() {
  }

  log(x){
    console.log(x);
  }

submit(f){
  console.log(f);
}

}
