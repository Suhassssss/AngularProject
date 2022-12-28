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
import { FormAssComponent } from './form-ass/form-ass.component';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiDataComponent } from './api-data/api-data.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { CountPipe } from './count.pipe';
import { SpRemovePipe } from './sp-remove.pipe';
import { CmlCasePipe } from './cml-case.pipe';
import { PipeAssComponent } from './pipe-ass/pipe-ass.component';
import { FilterpipeComponent } from './filterpipe/filterpipe.component';
import { FilterPipe } from './filter.pipe';
import { PipeAss2Component } from './pipe-ass2/pipe-ass2.component';
import { GenderPipe } from './gender.pipe';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { TvComponent } from './products/tv/tv.component';
import { TabletComponent } from './products/tablet/tablet.component';
import { WashingmachineComponent } from './products/washingmachine/washingmachine.component';
import { RoutingAssComponent } from './routing-ass/routing-ass.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { DemopostComponent } from './demopost/demopost.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { ProductsModule } from './products/products.module';
import { RouterModule } from '@angular/router';
import { UtilityModule } from './models/utility.module';
import { ElectronicsComponent } from './electronics/electronics.component';
import { MobilesComponent } from './electronics/mobiles/mobiles.component';
import { CamerasComponent } from './electronics/cameras/cameras.component';
import { ElectronicsModule } from './electronics/electronics.module';

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
    RfAssComponent,
    FormAssComponent,
    Service1Component,
    Service2Component,
    ApiDataComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    PipeDemoComponent,
    CountPipe,
    SpRemovePipe,
    CmlCasePipe,
    PipeAssComponent,
    FilterpipeComponent,
    FilterPipe,
    PipeAss2Component,
    GenderPipe,
    AboutusComponent,
    ContactusComponent,
    // ProductsComponent,
    HomeComponent,
    LoginComponent,
    PagenotfoundComponent,
    // LaptopComponent,
    // TvComponent,
    // TabletComponent,
    // WashingmachineComponent,
    RoutingAssComponent,
    NavbarsComponent,
    DemopostComponent,
    PostdetailsComponent
    // ElectronicsComponent,
    // MobilesComponent,
    // CamerasComponent
  ],
  imports: [
    BrowserModule,
    ElectronicsModule,
    ProductsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UtilityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
