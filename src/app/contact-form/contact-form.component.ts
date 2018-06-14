import { Component, } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent{
  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Phone'},
  ];

  submit(f) {
    console.log(f);
    if(!f.valid) {
      console.log("Please check fields.")
    }
  }
 
}