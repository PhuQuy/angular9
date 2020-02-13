import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarModule } from '@components/navbar/navbar.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '@layouts/main-layout/main-layout.component';
import { ShareService } from './share/share.service';
import { DirectiveModule } from './directives/directive.module';

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
        RouterModule.forRoot(routes,
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                scrollOffset: [0, 64] // [x, y]
            })
    ],
    providers: [ShareService],
    bootstrap: [AppComponent]
})
export class AppModule { }
