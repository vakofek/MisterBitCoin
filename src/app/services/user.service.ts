import { Injectable } from "@angular/core";
import { User } from "../model/user.model";
import { Observable, BehaviorSubject, of } from 'rxjs';

const USERS: User[] = [
    { name: 'Tair Bitan', coins: 106, moves: [] },
];

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private _usersDb: User[] = USERS;


    // private _pets$ = new BehaviorSubject([]);

    private _users$: any = new BehaviorSubject([]);
    // private _users$ = new BehaviorSubject<User[]>([])
    public users$ = this._users$.asObservable()

    constructor() {
    }

    getUser() {
        const user = this._usersDb[0];
        return user ? of(user) : Observable.throw('No user !')
    }
}