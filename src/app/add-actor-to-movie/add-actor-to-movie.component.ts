import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-actor-to-movie',
  templateUrl: './add-actor-to-movie.component.html',
  styleUrls: ['./add-actor-to-movie.component.css']
})
export class AddActorToMovieComponent implements OnInit {
  moviesDB: any[] = [];
  actorsDB: any[] = [];
  name: string = "";
  title: string = "";
  constructor(private dbService: DatabaseService, private router: Router) {}
  
  
  onSelect(name: string){
    this.name = name;
    console.log(name, this.name);
  }
  onSelectMovie(title: string){
    this.title = title;
    console.log(title, this.title);
  }

  onAddActor(){
    let obj = {title: this.title, name: this.name};
    this.dbService.addActorToMovie(obj).subscribe(result => {
      this.router.navigate(["/listmovies"]);
    })
  }

  ngOnInit(): void {
    console.log("Hi From ListMovies ngIOnit");
    this.dbService.getMovies().subscribe((data: any) => {
      this.moviesDB = data;
    });
    this.dbService.getActors().subscribe((data: any) => {
      this.actorsDB = data;
    });
  }
  
}
