import { Component } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { Author } from '../../models/author';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [NgFor],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {

  author!: Author;
  authors!: Array<Author>;

  constructor(private authorService: AuthorService){
    this.authors = new Array<Author>();
    this.author = new Author();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.obtenerAutores();
  }

  public obtenerAutores(){
    this.authorService.getPopularAuthors().subscribe(
      (result) => {
        this.authors = result;
      }
    )

  }

  public obtenerInformacionDeAutorPorId(id: string){
    this.authorService.getAuthorInformationById(id).subscribe(
      (result)=>{
        Object.assign(this.author, result);
        console.log(this.author);
      }
    )
  }
}
