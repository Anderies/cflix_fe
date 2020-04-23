import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FilmCrudComponent } from './film-crud.component';

const appRoutes: Routes = [
    {
        path: '',
        component: FilmCrudComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})

export class FilmCrudModule { }