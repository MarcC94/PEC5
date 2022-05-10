import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators }  from '@angular/forms';


@Component({
  selector: 'app-winenew',
  templateUrl: './winenew.component.html',
  styleUrls: ['./winenew.component.css']
})
export class WinenewComponent implements OnInit {
   
  wineForm;

  constructor(private formBuilder: FormBuilder) {
    this.wineForm = formBuilder.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      imageUrl: ['', [Validators.required, Validators.pattern(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
      )]],
    })  

   }

  ngOnInit(){
  }

  createWine(){
    console.warn(this.wineForm.value);
  }

  get name(){
    return this.wineForm.get('name');
  }

  get price(){
    return this.wineForm.get('price');
  }

  get imageUrl(){
    return this.wineForm.get('imageUrl');
  }

}
