import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warningAlert/warningAlert.component';
import { FormsModule } from '@angular/forms';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { DirectivesComponent } from './directives/directives.component';
import { AttriComponent } from './attri/attri.component';
import { CustdirDirective } from './custdir.directive';
import { CustmdirDirective } from './custmdir.directive';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { HooksComponent } from './hooks/hooks.component';
import { HookChildComponent } from './hook-child/hook-child.component';
import { DirassignComponent } from './dirassign/dirassign.component';
import { RemoveRowComponent } from './remove-row/remove-row.component';
import { NewhooksComponent } from './newhooks/newhooks.component';
import { SimpleTemplateformComponent } from './simple-templateform/simple-templateform.component';
import { PracticechildComponent } from './practicechild/practicechild.component';
import { PracticeparentComponent } from './practiceparent/practiceparent.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { SimpletemplateComponent } from './simpletemplate/simpletemplate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomDirective } from './custom.directive';
import { RfAssComponent } from './rf-ass/rf-ass.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    DemodirectivesComponent,
    DirectivesComponent,
    AttriComponent,
    CustdirDirective,
    CustmdirDirective,
    ChildCompComponent,
    ParentCompComponent,
    HooksComponent,
    HookChildComponent,
    DirassignComponent,
    RemoveRowComponent,
    NewhooksComponent,
    SimpleTemplateformComponent,
    PracticechildComponent,
    PracticeparentComponent,
    TemplateFormComponent,
    ReactiveformComponent,
    SimpletemplateComponent,
    CustomDirective,
    RfAssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
