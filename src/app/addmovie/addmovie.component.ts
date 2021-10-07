import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

  moviesDB: any[] = [];
  title:string = "";
  year: number = 0;
  id: string = "";

  constructor(private dbService: DatabaseService, private router: Router) {}

  onSaveMovie(){ 
    let m_obj = {title: this.title, year: this.year}
    this.dbService.createMovie(m_obj).subscribe(result=>{
      this.router.navigate(["/listmovies"]);
    })
  }

  ngOnInit(): void {
  }

}
