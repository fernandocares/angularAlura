import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo.model';

@Pipe({
    name: 'filterByDescription'
})
export class filterByDescription implements PipeTransform{

    transform(photos: Photo[], descriptionQuery: string) {
        
        descriptionQuery = descriptionQuery.trim().toLowerCase();

        if(descriptionQuery){
            return photos.filter(photo => photo.description.toLocaleLowerCase().includes(descriptionQuery));
        } else {
            return photos;
        }
    }

}