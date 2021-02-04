import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {
  isCollapsed = false;
  isVisible = false;
  visible = false;
  notiVisible = false;
  navNotiVisible = false;

  menues = [
    {
      name: 'Quản lý đơn hàng',
      icon: 'apartment',
      children: [
        {
          name: 'Nhập đơn hàng',
          link: '/order',
          icon: 'edit',
        },
      ]
    },
    {
      name: 'Báo cáo',
      icon: 'file-done',
      children: [
        {
          name: 'Báo cáo',
          link: '/report',
          icon: 'area-chart',
        },
        {
          name: 'Sổ quỹ',
          link: '/cash-book',
          icon: 'book',
        },
      ]
    },
    {
      name: 'Nhập hàng',
      icon: 'form',
      children: [
        {
          name: 'Sản phẩm',
          link: '/products',
          icon: 'folder-add'
        },
        {
          name: 'Sản phẩm chi tiết',
          link: '/product-details',
          icon: 'profile'
        },
        {
          name: 'Danh mục',
          link: '/category',
          icon: 'partition'
        },
      ]
    },
    {
      name: 'Nhập dữ liệu web',
      icon: 'highlight',
      children: [
        {
          name: 'Ảnh slide',
          link: '/carousel',
          icon: 'picture'
        },
      ]
    },
  ]
  constructor() { }

  ngOnInit() {
  }
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
  clickMe(): void {
    this.visible = false;
  }

  toggleNoti() {
    this.notiVisible = !this.notiVisible;
  }
  toggleNavNoti() {
    this.navNotiVisible = !this.navNotiVisible;
  }
}
