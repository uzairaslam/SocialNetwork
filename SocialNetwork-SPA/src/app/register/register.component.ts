import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  register() {
    console.log(this.model);
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }
}
