import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  isVisible = false;
  listOfData = [
    {
      code: 'FB01',
      clientName: 'Văn A',
      channel: 'Facebook',
      totalPayment: '30,000đ',
      payment: '15,000đ',
      status: 'Hoàn thành',
    },
    {
      code: 'WS01',
      clientName: 'Thị B',
      channel: 'Insta',
      totalPayment: '50,000đ',
      payment: '15,000đ',
      status: 'Đang xử lý',
    },
    {
      code: 'SP02',
      clientName: 'Xuân C',
      channel: 'Shopee',
      totalPayment: '50,000đ',
      payment: '15,000đ',
      status: 'Hủy',
    },
    {
      code: 'IT04',
      clientName: 'Hữu D',
      channel: 'Website',
      totalPayment: '30,000đ',
      payment: '0đ',
      status: 'Hủy',
    },
  ];
  orders = [
    {
      code: 'IT04',
      clientName: 'Hữu D',
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
