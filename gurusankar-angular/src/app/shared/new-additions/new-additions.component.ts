import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-additions',
  templateUrl: './new-additions.component.html',
  styleUrls: ['./new-additions.component.scss']
})
export class NewAdditionsComponent implements OnInit {
  addForm: FormGroup = this.formBuilder.group({
    agencyName: [''],
    itemName: [''],
    category: [''],
    quantity: [''],
    price: [''],
    phoneNo: [''],
    city: [''],
  });
  showOverallErr: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<NewAdditionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.setMandatoryField();
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit = () => {
    this.showOverallErr = false;
    if(this.addForm.invalid){
      // Object.keys(this.addForm.controls).forEach(control => {
      //   if(this.addForm.get(control)?.invalid){
      //     this.addForm.get(control)?.markAsTouched();
      //   }
      // });
      this.addForm.markAllAsTouched();
      this.showOverallErr = true;
      return;
    }
    this.dialogRef.close({data: this.addForm.value});
  }

  setMandatoryField = () => {
    switch (this.data.title){
      case 'Item':
        this.addForm.get('agencyName')?.addValidators(Validators.required);
        this.addForm.get('itemName')?.addValidators(Validators.required);
        this.addForm.get('category')?.addValidators(Validators.required);
        this.addForm.get('price')?.addValidators(Validators.required);
        break;
    }

  }

}
