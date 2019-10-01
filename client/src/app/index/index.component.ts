//Index TS Page
import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent {
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  //When user clicks on Image A for modal.
  openA(contentA): void {
    this.modalService.open(contentA, {size: 'xl'})
  };  

  //When user clicks on Image B for modal.
  openB(contentB): void {
    this.modalService.open(contentB, {size: 'xl'})
  };

  //When user clicks on Image C for modal.
  openC(contentC): void {
    this.modalService.open(contentC, {size: 'xl'})
  };
}