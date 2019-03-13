import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const log = console.log;

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    constructor(private _router: Router) {}

    ngOnInit() {}

    register(form) {
        log(form);
        this._router.navigateByUrl('/tabs/tab1');
    }
}
