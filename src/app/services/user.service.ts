import { Injectable } from "@angular/core";
import { User } from "../model/user.model";
import { Observable, BehaviorSubject, of } from 'rxjs';
import { StorageService } from "./storage.service";

const USERS: User[] = [
    { name: 'tair Bitan', username: 'tair', coins: 106, moves: [], password: '1111' },
];



@Injectable({
    providedIn: 'root'
})
export class UserService {

    private _usersDb: User[] = USERS;

    loggedInUser = this.storageService.load('loggedInUser')



    private _user$: any = new BehaviorSubject(null);
    public user$ = this._user$.asObservable()

    constructor(private storageService: StorageService) {
    }

    

    login(credentials: { username: string, password: string }) {
        const currUserIdx = this._usersDb.findIndex(user => {
            return user.username === credentials.username && user.password === credentials.password
        })
        if (currUserIdx !== -1) {
            this.storageService.save('loggedInUser', this._usersDb[currUserIdx])
            this._user$.next(this._usersDb[currUserIdx])
            return of(this._usersDb[currUserIdx])
        }
        return of(null)
    }

    logout(){
        this.storageService.save('loggedInUser', null)  
        this._user$.next(null) 
        return of(null)
    }

    signup(user:User){
        this._usersDb.push(user)
        const credentials = {username: user.username , password: user.password}
        this.login(credentials)
    }


    // getLoggedInUser() {
      
    //     return 
    // }
}