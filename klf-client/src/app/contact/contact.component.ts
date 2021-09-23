import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private Email: EmailService) { }

  ngOnInit(): void {
  }

  emailContact(event: any){
    event.preventDefault();
    const target = event.target;
    const emailText = target.querySelector('#emailBody').value;

    this.Email.sendContactEmail(emailText).subscribe(data => {
      window.alert('successfully sent email')
    },
    error => window.alert(error))
  }
}
