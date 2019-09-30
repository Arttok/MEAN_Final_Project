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

  openA(contentA): void {
    this.modalService.open(contentA, {size: 'xl'})
  };  

  openB(contentB): void {
    this.modalService.open(contentB, {size: 'xl'})
  };

  openC(contentC): void {
    this.modalService.open(contentC, {size: 'xl'})
  };
}