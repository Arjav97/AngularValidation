import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponent } from './reactive/reactive.component';

const appRoutes: Routes = [
  {path:'template',component:TemplateComponent},
  {path:'reactive',component:ReactiveComponent}
]

@NgModule({
  declarations:[
    TemplateComponent,
    ReactiveComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
