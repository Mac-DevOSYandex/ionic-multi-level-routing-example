import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'tabs-page', loadChildren: './pages/tabs-page/tabs-page.module#TabsPageModule' },
    { path: 'register', loadChildren: './pages/user/register/register.module#RegisterModule' },
    { path: 'login', loadChildren: './pages/user/login/login.module#LoginModule' },
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
