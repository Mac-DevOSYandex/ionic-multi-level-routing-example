import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from '@pages/tabs-page/tabs-page.page';
import { RegisterPage } from '@pages/user/register/register.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'register',
                children: [
                    {
                        path: '',
                        component: RegisterPage,
                    },
                    {
                        path: 'register/:sessionId',
                        loadChildren: '@pages/user/register/register.module#RegisterModule',
                    },
                ],
            },
            {
                path: 'about',
                children: [
                    {
                        path: '',
                        loadChildren: '../about/about.module#AboutModule',
                    },
                ],
            },
            {
                path: 'welcome',
                children: [
                    {
                        path: '',
                        loadChildren: '@ig/tabs/tabs/tabs.module#TabsModule',
                    },
                ],
            },
            {
                path: 'login',
                children: [
                    {
                        path: '',
                        loadChildren: '@pages/user/login/login.module#LoginModule',
                    },
                ],
            },
            {
                path: '',
                redirectTo: '/app/tabs/welcome',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '',
        redirectTo: '/app/tabs/welcome',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TabsPageRoutingModule {}
