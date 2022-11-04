import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { CreaterulesComponent } from './createrules/createrules.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { MaterialModule } from './shared/material.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UpdaterulesComponent } from './updaterules/updaterules.component';
import { HeaderComponent } from './header/header.component';
import { RuleMonitorComponent } from './rule-monitor/rule-monitor.component';
import { MatDialogPositionComponent } from './mat-dialog-position/mat-dialog-position.component';
import { MatDialogAuditComponent } from './mat-dialog-audit/mat-dialog-audit.component';
import { RuleConfigComponent } from './rule-config/rule-config.component';
import { MatDialogFieldauditComponent } from './mat-dialog-fieldaudit/mat-dialog-fieldaudit.component';
import { MatDialogSearchComponent } from './mat-dialog-search/mat-dialog-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RulesComponent,
    CreaterulesComponent,
    UpdaterulesComponent,
    HeaderComponent,
    RuleMonitorComponent,
    MatDialogPositionComponent,
    MatDialogAuditComponent,
    RuleConfigComponent,
    MatDialogFieldauditComponent,
    MatDialogSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    DragDropModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut:5000,
      positionClass:'toast-top-center',
      preventDuplicates:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
