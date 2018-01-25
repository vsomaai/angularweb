import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: [
        'home.scss'
    ]
})
export class HomeComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;
    constructor(
    ) {
    }

    ngOnInit() {

    }

    registerAuthenticationSuccess() {

    }

    isAuthenticated() {
        return false;
    }

    login() {
    }
}
