import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreaterulesComponent } from './createrules/createrules.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RuleConfigComponent } from './rule-config/rule-config.component';
import { RuleMonitorComponent } from './rule-monitor/rule-monitor.component';
import { RulesComponent } from './rules/rules.component';
import { UpdaterulesComponent } from './updaterules/updaterules.component';

const routes: Routes = [
  {
    path:"",redirectTo:"/home",pathMatch:"full"
  },
  {
    path:"home",component:HomeComponent
  },
  {
    path:"rules",component:RulesComponent
  },
  {
    path:"createrules",component:CreaterulesComponent
  },
  {
    path:"updaterules/:id",component:UpdaterulesComponent
  },
  {
    path:"rulemonitor",component:RuleMonitorComponent
  },
  {
    path:"header",component:HeaderComponent
  },
  {
    path:"ruleconfig",component:RuleConfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
