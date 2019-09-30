import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  user_name: string;
  user_password: string;
  email: string;
  is_admin: number;
  confirm_pass: string;


  constructor() { }

  ngOnInit() {
  }

}