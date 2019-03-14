import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TabsPageRoutingModule } from '@pages/tabs-page/tabs-page-routing.module';
import { IonicModule } from '@ionic/angular';
import { RegisterPage } from '@pages/user/register/register.page';
import { TabsPage } from './tabs-page.page';

const routes: Routes = [
    {
        path: '',
        component: TabsPage,
    },
];

@NgModule({
    imports: [CommonModule, TabsPageRoutingModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
    declarations: [TabsPage, RegisterPage],
})
export class TabsPageModule {}
