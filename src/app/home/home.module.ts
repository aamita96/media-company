import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeModule } from '.';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [...homeModule],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(homeRoutes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
