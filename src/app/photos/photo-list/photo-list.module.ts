import { NgModule } from '@angular/core';
import { PhotoComponent } from '../photo/photo.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { CommonModule } from '@angular/common';
import { filterByDescription } from './filter-by-description.pipe';
import { PhotoModule } from '../photo/photo.module';
import { PhotoListComponent } from './photo-list.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SearchComponent } from './photos/search/search.component';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        filterByDescription,
        SearchComponent
    ],
    imports: [
        CommonModule,
        PhotoModule,
        CardModule,
        DarkenOnHoverModule
    ]
})
export class PhotoListModule {

}