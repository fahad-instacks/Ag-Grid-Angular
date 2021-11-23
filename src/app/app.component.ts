import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Logger } from 'ag-grid-community/dist/lib/main';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  columnDefs = [
    {
      headerName: 'Name',
      field: 'name',
      sortable: true,
      filter: true,
      checkboxSelection: true,
    },
    {
      headerName: 'Email',
      field: 'email',
      sortable: true,
      filter: true,
      // checkboxSelection: true,
    },
    {
      headerName: 'Job title',
      field: 'job_title',
      sortable: true,
      filter: true,
      // checkboxSelection: true,
    },
  ];

  rowData: any;
  constructor(private http: HttpClient) {
    this.http.get('https://www.testjsonapi.com/users/').subscribe(
      (data) => {
        this.rowData = data;
      },
      (error) => console.error(error)
    );
  }
}
