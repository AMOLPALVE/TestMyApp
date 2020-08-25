import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetDataService } from './get-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'Pratice';
  columnDefs:any[];
  rowData:any[];
  isShow:boolean=false;
  constructor(private http: HttpClient) {

      // s.getUserData().subscribe(data=>{
      //   console.log("Hello:"+data)
      // })
    // this.http.get("/assets/data.json").toPromise().then(data=>{
    //   console.log(data);
    //   this.columnDefs=data['columnDefs'];
    //  this.rowData=data['rowData']
    // });

   }
  ngOnInit(): void {
    this.http.get("/assets/data.json").toPromise().then(data=>{
      console.log(data);
      this.columnDefs=data['columnDefs'];
     this.rowData=data['rowData'];
     this.isShow=true;
    });
  }
//   columnDefs = [
//     {headerName: 'Make', field: 'make'},
//     {headerName: 'Model', field: 'model'},
//     {headerName: 'Price', field: 'price'}
// ];

// rowData = [
//     {make: 'Toyota', model: 'Celica', price: 35000},
//     {make: 'Ford', model: 'Mondeo', price: 32000},
//     {make: 'Porsche', model: 'Boxter', price: 72000}
// ];
}
