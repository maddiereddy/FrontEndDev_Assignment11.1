import { Component }    from '@angular/core'
import { User }     from './user'
import { UserService }  from './user.service'


@Component({
    selector: 'user-list',
    providers: [UserService],
    template:
        `<div *ngFor="let user of users">
            <b myHighlight>{{user.name}}, </b>
            <p><b>DOB: </b>{{user.dob}}, 
            <b>Email: </b>{{user.email}}, 
            <b>Status: </b>{{user.status}}, 
            <b>Enroll: </b><a myHighlight href={{user.enroll}}>Enroll test here</a></p>
            <br>
         </div>`
})

export class UserListComponent {
    users: User[];
    constructor(userService: UserService) {
        this.users = userService.getUsers()
    }
}

