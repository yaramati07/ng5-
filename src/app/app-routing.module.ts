import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     // Add this
import { AboutComponent } from './about/about.component';  // Add this
import { DashboardComponent } from './dashboard/dashboard.component';
import { LineChartComponent } from './line-chart/line-chart.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'about/:id',
    component: AboutComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'line-chart',
    component: LineChartComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
