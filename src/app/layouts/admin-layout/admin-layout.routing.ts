import { Routes } from '@angular/router';

import { DashboardComponent } from '../../cmp/dashboard/dashboard.component';
import { UserProfileComponent } from '../../cmp/user-profile/user-profile.component';
import { TableListComponent } from '../../cmp/table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../cmp/notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import { GeneralesComponent } from '../../cmp/generales/generales.component';

export const AdminLayoutRoutes: Routes = [
    
    { path: 'dashboard',        component: DashboardComponent },
    { path: 'user-profile',     component: UserProfileComponent },
    { path: 'table-list',       component: TableListComponent },
    { path: 'typography',       component: TypographyComponent },
    { path: 'icons',            component: IconsComponent },
    { path: 'maps',             component: MapsComponent },
    { path: 'notifications',    component: NotificationsComponent },
    { path: 'upgrade',          component: UpgradeComponent },

    { path: 'generales',          component: GeneralesComponent },
    
];
