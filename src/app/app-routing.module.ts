import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: '', loadChildren: '@ig/tabs/tabs/tabs.module#TabsModule' },
    { path: 'tabs-page', loadChildren: '@pages/tabs-page/tabs-page.module#TabsPageModule' },
    // { path: 'register', loadChildren: './pages/user/register/register.module#RegisterModule' },
    // { path: 'login', loadChildren: './pages/user/login/login.module#LoginModule' },
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
