import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../contact.service'; // import the ContactService

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  FormData!: FormGroup;

  constructor(private builder: FormBuilder, private contact: ContactService) { }

  ngOnInit() {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Comment: new FormControl('', [Validators.required])
    });
  }

  onSubmit(formData: any) {
    console.log(formData);
    this.contact.postMessage(formData)
      .subscribe(
        response => {
          console.log(response);
          location.href = 'https://mailthis.to/confirm';
        },
        error => {
          console.log(error);
          console.warn(error.responseText);
        }
      );
  }
}
