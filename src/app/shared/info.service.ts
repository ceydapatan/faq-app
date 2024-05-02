import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InfoService {

    private dataSubject = new BehaviorSubject<any>(null);
    private cEditedSubject = new BehaviorSubject<any>(null);
    private commentSubject = new BehaviorSubject<any>(null);

    data$ = this.dataSubject.asObservable();
    cEdited$ = this.cEditedSubject.asObservable();
    comment$ = this.commentSubject.asObservable();

    
  
    delete: boolean = false;



  constructor() { }



  setDelete(d: boolean)
  {
    this.delete = d;
  }

  
  setData(data: any) {
    this.dataSubject.next(data);
  }

  setComment(c: any) {
    this.commentSubject.next(c);
  }


setcEdited(cEdited:any){
    this.cEditedSubject.next(cEdited);
}


  getCustomerAddress()
  {
    return this.delete;
  }
}