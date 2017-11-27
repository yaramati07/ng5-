import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';
  private apiUrl = 'http://localhost/RMService/Api/PerformanceHCDashboard?TargetEnvironment=wd-stg2.teslamotors.com';
  data: any = {};

constructor(private http: Http){
console.log('Hello fellow user');
this.getContacts();
this.getData();
}

getData() {
  return this.http.get(this.apiUrl).map((res: Response) => res.json())
}

getContacts(){
  this.getData()
}


}

