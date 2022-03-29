import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'login';
  constructor(private service: AppServiceService) {
  }
  ngOnInit() {
    this.getDataFromApi()
  }
  getDataFromApi() {
    this.service.getData({ data: "" }).subscribe((Response) => {
      console.log("Response of API", Response);
    })
    
  }
}
