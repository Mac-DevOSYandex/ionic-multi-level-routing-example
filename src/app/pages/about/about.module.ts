import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AboutPage } from '@pages/about/about';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: AboutPage,
    },
];

@NgModule({
    imports: [
        CommonModule, //
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
    ],
    declarations: [AboutPage],
    exports: [RouterModule],
    bootstrap: [AboutPage],
})
export class AboutModule {}
