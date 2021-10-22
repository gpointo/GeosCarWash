import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { SnotifyService } from 'ng-snotify';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.scss']
})
export class EstimateComponent   {
  name:any;
  email:any;
  number:any;
  address:any;
  preferedCallTime:any;
  squarefoot:any;
  description:any;
  
  model: any = {};
  snotifyConfig = environment.snotifyConfig;
  onTouched = () => {};
  constructor(private fb: FormBuilder,private profile: ProfileService,private snotify: SnotifyService) {

  }
  formdata: FormGroup = this.fb.group({
    name: [null, [Validators.required]],
    email: [null, [Validators.required]],
    number: [null, [Validators.required]],
    address: [null, [Validators.required]],
    preferedCallTime: [null, [Validators.required]],
    squarefoot: [null],
    description: [null]
});

sendEmail(f:any){
  console.log("test")
  if( f.form.valid ){
    console.log(this.model.name)
    this.contact()
    f.resetForm()
  }else{
    this.snotify.error('Please fill required fields.');
  }
 
}
  contact() {
    this.profile.contactus(this.formdata.value).subscribe(data => {
        this.snotify.success( "Email has been sent");
    }, err => {
      this.snotify.error('Something went wrong. Try again later.');
    });
  }
}
