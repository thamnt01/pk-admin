import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { OrderModalComponent } from '../order-modal/order-modal.component';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  // filterGender = [
  //   { text: 'Facebook', value: 'Facebook' },
  //   { text: 'Website', value: 'Website' }
  // ];
  radioValue = 'A';
  isVisible = false;
  orders = [
    {
      code: 'IT04',
      name: 'Hữu D',
      phoneNumber: '012345678',
      address: 'Số 9 ngõ 159 Triều khúc, Thanh Xuân, hà Nội',
      channel: 'Website',
      totalPrice: '200,00đ',
      discount: '20%',
      shipFee: '30,000đ',
      realShipFee: '20,000đ',
      totalPayment: '30,000đ',
      payment: '0đ',
      status: 'Hủy',
      note: 'Khách dặn ship chiều t7',
      children: [
        {
          productCode: 'SF1',
          productName: 'Sun Flower',
          productType: 'Vàng',
          amount: '3',
        }
      ]
    },
  ];
  cloneData: any[] = []
  constructor(private modal: NzModalService) {
    this.cloneData = this.orders.slice()
  }

  ngOnInit() {
  }
  createModal(value?: any): void {
    const modal = this.modal.create({
      nzTitle: 'Tạo đơn hàng',
      nzContent: OrderModalComponent,
      nzFooter: null,
      nzClassName: 'modal-md',
    });
    const instance = modal.getContentComponent();
    // instance.myForm.patchValue({ name: value });
    modal.afterClose.subscribe(result => {
      if (result !== undefined) {
        if (value) {
          const index = this.orders.indexOf(value);
          this.orders[index] = result;
          this.orders = [...this.orders]
        } else {
          this.orders = [result, ...this.orders]
        }
      }
    })
  }
  onDispatch(event: [string, any]) {
    const [action, data] = event;
    switch (action) {
      case 'create':
        this.createModal();
        break;
      case 'refresh':
        console.log('Tao làm gì kệ tao');
        break;
      case 'delete':
        this.orders = this.orders.filter(x => x !== data);
        break;
      case 'view':
        this.isVisible = true;
        break;
      case 'edit':
        this.createModal(data);
        break;
      case 'search':
        console.log(this.cloneData)
        this.orders = this.cloneData.filter(x => x.name.toLocaleLowerCase().includes(data.toLocaleLowerCase()));
        break;
      default:
        break;
    }
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
