import { filter } from 'rxjs/operators';
import { PostService } from './../service/post.service';
import { Component, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatPaginator, MatSort, Sort } from '@angular/material';
import { ActivatedRoute, Data, Router } from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditpostComponent } from '../editpost/editpost.component';
import { PostsComponent } from '../posts/posts.component';

import { DataSource } from '@angular/cdk/table';

import { AfterViewInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-viewpost', 
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css'],
  animations: [
      trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ViewpostComponent implements OnInit{

   
  columnsToDisplay = ['title','edit','delete'];
  post: any;
  dataSource: any = [];
  userReg: any;
  val: any;
  id:any
  userid
  click: boolean
  paginator: any;
  dataVal: any;


  // paginator: any;
     @ViewChild(MatPaginator, { read: false, static: true }) set matPaginator(mp: MatPaginator) {
      this.paginator = mp;
      }
      @ViewChild(MatSort, { read: false, static: true}) sort: MatSort;
  
   constructor( public dialog: MatDialog, private postService : PostService, private router: Router, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation() && this.router.getCurrentNavigation().extras && this.router.getCurrentNavigation().extras.state) {
       console.log("what is in state data", this.router.getCurrentNavigation().extras.state);
        if (this.router.getCurrentNavigation().extras.state.view) {
          console.log("in second if, data is", this.router.getCurrentNavigation().extras.state.view);
           this.userid = this.router.getCurrentNavigation().extras.state.view;
           console.log("userid",this.userid);

                }
                }
                });
           }
         
      

      ngOnInit() {
      
          let val = JSON.parse(localStorage.getItem('token'));
         const id = val.user.data._id;

         this.postService.getPost(id).subscribe((data) => {
          // console.log("get post data----",data);
          this.dataVal = data
          this.dataSource = new MatTableDataSource(this.dataVal);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
         })
       
         if(this.userid && this.userid._id){
          this.postService.getUserPost(this.userid._id).subscribe((data) => {
          // console.log("get user post data----",data);
          this.dataVal = data
          this.dataSource = new MatTableDataSource(this.dataVal);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          })
        } 
        
        } 
       
        applyFilter(filterValue: string) {
          let newData =  this.dataVal.filter(i => i.title.toLowerCase().includes(filterValue.toLowerCase()));
          // console.log(newData);
          this.dataSource = newData;
          this.dataSource = new MatTableDataSource(this.dataSource);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        
        }
        
        editPost(data:any){
           console.log("edit post---->",data);
           let obj ={
            data:data,
            isupdated:true
          }
          this.dialog.open(PostsComponent,{data: obj});
          }

        deletePost(id:any,index){
          console.log("deleted data-->",id)
          this.postService.deletePost(id).subscribe(data => {
          console.log("deleted data response-->",data)
           //   this.getData()
      }
      ),(err) => {
        console.error("error-->",err)
      }
      console.log(this.dataSource);
      
      this.dataSource.splice(index,1);
    }
} 

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

