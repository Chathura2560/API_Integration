import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {Routes} from '@angular/router'; //

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,
    HttpClientModule],  // Add this line to use ngFor
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] // This should be plural
})

export class DashboardComponent {

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





//   currentPage: number = 1;
//   pageSize: number = 5;
//
//   filteredSupplier: Array<Suppliers> = this.suppliers;
//   pageSizes: Array<number> = [ 5,10,20 ];
//
//   ngOnInit(){
//     this.visibleDate();
//     this.pageNumbers();
//   }
//
//   visibleDate() {
//     let startIndex = (this.currentPage - 1) * this.pageSize ;
//     let endIndex = startIndex + this.pageSize;
//     return this.filteredSupplier.slice(startIndex, endIndex);
//   }
//
//   nextPage(){
//     this.currentPage++;
//     this.visibleDate();
//   }
//
//   previousPage() {
//     this.currentPage--;
//     this.visibleDate();
//   }
//
//   pageNumbers() {
//     let totalPages = Math.ceil (this.filteredSupplier.length / this.pageSize);
//     let pageNumArray = new Array(totalPages);
//
//
//     return pageNumArray;
//   }
//
//   changePage(pageNumber:number){
//     this.currentPage = pageNumber;
//     this.visibleDate();
//   }
//
//   filterData(searchTerm: string) {
//     this.filteredSupplier = this.suppliers.filter((item) => {
//       return Object.values(item).some((val) => {
//         // Check if the value is a string before using toLowerCase
//         if (typeof val === 'string') {
//           return val.toLowerCase().includes(searchTerm.toLowerCase());
//         }
//         return false;  // Skip non-string values
//       });
//     });
//     this.visibleDate();
//   }
//
//   changePageSize(pageSize:any){
//     this.pageSize = pageSize;
//     this.visibleDate();
//
//   }
//
// }

