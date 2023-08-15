import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class serviceService {
    private _page : BehaviorSubject<string> = new BehaviorSubject<string>("");
    public page : Observable<string> = this._page.asObservable();

    setPage(p:string){
        this._page.next(p)
    }

    getPage(){
        return this._page;
    }
}