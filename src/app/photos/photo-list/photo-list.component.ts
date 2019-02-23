import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo.model';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { PhotosComponent } from './photos/photos.component';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';
  haseMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';
  
  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) {

  }

  ngOnInit(): void{
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data['photos'];

  }

  load(){
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage).subscribe(response =>{
      this.filter = '';
      this.photos = this.photos.concat(response);
      if(!PhotosComponent.length) this.haseMore = false;
    }, error =>{
    });
  }

}
