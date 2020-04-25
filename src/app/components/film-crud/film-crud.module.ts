import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FilmCrudComponent } from './film-crud.component';
import { HeaderNewFilmComponent } from './header-new-film/header-new-film.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
    {
        path: '',
        component: FilmCrudComponent
    },
];

@NgModule({
    imports: [
        
        CommonModule,
        FormsModule,
        RouterModule.forChild(appRoutes)],
    exports: [RouterModule],
    declarations: [
        FilmCrudComponent,
        HeaderNewFilmComponent,
    ]
})

export class FilmCrudModule { }