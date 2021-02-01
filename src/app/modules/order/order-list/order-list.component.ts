import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  listOfData = [
    {
      code: 'FB01',
      clientName: 'Văn A',
      channel: 'Facebook',
      totalPrice: '30,000đ',
      payment: '15,000đ',
      status: 'Hoàn thành',
    },
    {
      code: 'WS01',
      clientName: 'Thị B',
      channel: 'Insta',
      totalPrice: '50,000đ',
      payment: '15,000đ',
      status: 'Đang xử lý',
    },
    {
      code: 'SP02',
      clientName: 'Xuân C',
      channel: 'Shopee',
      totalPrice: '50,000đ',
      payment: '15,000đ',
      status: 'Hủy',
    },
    {
      code: 'IT04',
      clientName: 'Hữu D',
      channel: 'Website',
      totalPrice: '30,000đ',
      payment: '0đ',
      status: 'Hủy',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
