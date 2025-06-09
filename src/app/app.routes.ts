import { Routes } from '@angular/router';
import { LayoutComponent } from './feature/layout/layout.component';

export const routes: Routes = [
  {
    path: 'layout',
    component:LayoutComponent,
    children: [
      {
        path: 'menu',
        loadChildren: () => import('./feature/layout/menu/menu.routes').then(m => m.menuRoutes)
      }
    ]
  }
];
