import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NavbarModule } from '@components/navbar/navbar.module';
import { MainLayoutComponent } from '@layouts/main-layout/main-layout.component';
import { AppComponent } from './app.component';
import { ShareService } from './share/share.service';

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        loadChildren: () => import('@routes/home/home.module').then(mod => mod.HomeModule)
    },
];

@NgModule({
    declarations: [
        AppComponent,
        MainLayoutComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        NavbarModule,
        MatSidenavModule,
        RouterModule.forRoot(routes),
    ],
    providers: [ShareService],
    bootstrap: [AppComponent]
})
export class AppModule { }
