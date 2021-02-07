import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.scss']
})
export class OrderModalComponent implements OnInit {
  myForm: FormGroup;
  constructor(
    private modal: NzModalRef,
    private fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
      channel: ['', [Validators.required]],
      discount: ['', [Validators.required]],
      shipFee: ['', [Validators.required]],
      realShipFee: ['', [Validators.required]],
    })
  }

  ngOnInit() {
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
