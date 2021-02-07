import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { CategoriesModalComponent } from '../categories-modal/categories-modal.component';
@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  isVisible = true;
  isDisplay = false;
  listOfData: string[] = [
    'Phụ kiện tóc',
    'Khuyên tai',
    'Mũ',
    'Kính',
    'Nhẫn',
    'Vòng tay, lắc chân',
    'Vòng cổ, khăn',
    'Phụ kiện quần áo',
    'Móng',
    'Khác'
  ];
  listOfDataClone: string[] = []

  constructor(private modal: NzModalService) {
    this.listOfDataClone = this.listOfData.slice()
  }

  ngOnInit() {
  }
  createModal(value?: string): void {
    const modal = this.modal.create({
      nzTitle: 'Tạo danh mục',
      nzContent: CategoriesModalComponent,
      nzFooter: null,
      nzClassName: 'modal-md'
    });
    const instance = modal.getContentComponent();
    instance.myForm.patchValue({ name: value });
    modal.afterClose.subscribe(result => {
      if (result !== undefined) {
        if (value) {
          const index = this.listOfData.indexOf(value);
          this.listOfData[index] = result;
          this.listOfData = [...this.listOfData]
        } else {
          this.listOfData = [result, ...this.listOfData]
        }
      }
    });
  }


  onDispatch(event: [string, any]) {
    const [action, data] = event;
    switch (action) {
      case 'create':
        this.createModal();
        break;
      case 'refresh':
        console.log('Tao làm gì kệ tao')
        break;
      case 'delete':
        this.listOfData = this.listOfData.filter(x => x !== data)
        break;
      case 'edit':
        this.createModal(data);
        break;
      case 'search':
        this.listOfData = this.listOfDataClone.filter(x => x.toLocaleLowerCase().includes(data.toLocaleLowerCase()))
        break;
      default:
        break;
    }
  }
}
