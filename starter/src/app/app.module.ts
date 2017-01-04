import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { UsersComponent } from './users.component'
import { UserListComponent } from './user-list.component'
import {HighlightDirective} from "./highlight.directive"

@NgModule({
  imports: [BrowserModule],
  declarations: [UsersComponent, UserListComponent, HighlightDirective],
  bootstrap: [UsersComponent]
})

export class AppModule { }
