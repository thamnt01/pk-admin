import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  isVisible = false;
  orders = [
    {
      code: 'IT04',
      clientName: 'Hữu D',
      phone: '012345678',
      address: 'Số 9 ngõ 159 Triều khúc, Thanh Xuân, hà Nội',
      channel: 'Website',
      totalPrice: '200,00đ',
      discount: '20%',
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
  ]
  constructor() { }

  ngOnInit() {
  }
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  onEdit() {

  }
  onDelete() { }
}
