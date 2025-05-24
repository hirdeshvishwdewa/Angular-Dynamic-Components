import { Injectable, OnDestroy } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class AppService implements OnDestroy {
    constructor(public api: ApiService) { }
    ngOnDestroy(): void {

    }
}
