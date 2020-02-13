import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DirectiveModule } from 'app/directives/directive.module';
import { MatDialogModule } from '@angular/material/dialog';
import { CarouselModule } from 'ngx-owl-carousel-o';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
];

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FlexLayoutModule,
        MatIconModule,
        MatButtonModule,
        DirectiveModule,
        MatDialogModule,
        CarouselModule
    ]
})
export class HomeModule {
}
