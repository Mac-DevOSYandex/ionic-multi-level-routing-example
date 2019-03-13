import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const log = console.log;

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    router: any;
    constructor(private _router: Router) {}

    ngOnInit() {}

    login(form) {
        log(form);
        this._router.navigateByUrl('/tabs/tab4');
    }
}
