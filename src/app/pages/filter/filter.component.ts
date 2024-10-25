import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; //

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,
    HttpClientModule],  // Add this line to use ngFor
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'] // This should be plural
})
export class FilterComponent {

  userList: any [] = [];
  pageSizes: any[] = [];
  currentPage: number = 0;
  private suppliers: any;
  get visibleSuppliers() {
    return this.suppliers; // Or any filtering logic
  }


  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getAllUser(); // Call the function to get user data on component initialization
  }

  getAllUser() {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((result:any)=>{
      this.userList = result;
    })
  }

  filterData(value: string) {

  }

  changePageSize(value: string) {

  }

  visibleDate() {
    return undefined;
  }

  previousPage() {

  }

  pageNumbers() {
    return undefined;
  }

  changePage(number: number) {

  }

  nextPage() {

  }
}
