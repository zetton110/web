import { Injectable } from'@angular/core';
import { BehaviorSubject,Observable } from 'rxjs/Rx';

@Injectable()
export class LiveMessageService{

    values:Array<string> = [];    
    messages$:BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>(this.values);

    
    constructor(){
    }
    
    send(message:string){
        if(this.values.length == 3) this.clear();

        setTimeout(
            ()=>{
                this.values.push(message);
            }
        ,200)
    }

    receive(): Observable<Array<string>> {
        return this.messages$.asObservable();
    }

    clear(){
        this.values = [];
        this.messages$.next(this.values);
    }
}