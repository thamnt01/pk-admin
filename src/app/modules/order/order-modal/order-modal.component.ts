import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.scss']
})
export class OrderModalComponent implements OnInit {
  inputValue?: string;
  filteredOptions: string[] = [];
  options = ['Burns Bay Road', 'Downing Street', 'Wall Street'];
  myForm: FormGroup;
  constructor(
    private modal: NzModalRef,
    private fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      phoneNumber: ['', Validators.compose([Validators.required, Validators.minLength(9)])],
      address: ['', [Validators.required]],
      channel: ['', [Validators.required]],
      discount: ['', [Validators.required]],
      shipFee: ['', [Validators.required]],
      realShipFee: ['', [Validators.required]],
    });
    this.filteredOptions = this.options;
  }

  ngOnInit() {
  }
  onChange(value: string): void {
    this.filteredOptions = this.options.filter(option => option.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
  handleOk() {
    this.validateForm(this.myForm);
    if (this.myForm.invalid) {
      return;
    }
    this.modal.destroy(this.myForm.value);
  }
  handleCancel() {
    this.modal.destroy()
  }
  validateForm(form: FormGroup) {
    form.markAllAsTouched();
    for (const key in form.controls) {

      form.controls[key].updateValueAndValidity();
      if (form.controls[key] instanceof FormGroup) {
        this.validateForm(form.controls[key] as FormGroup);
      }
    }
  }


}
