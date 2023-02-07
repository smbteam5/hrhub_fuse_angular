import { MatTabsModule } from '@angular/material/tabs';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { ReviewPopupRoutingModule } from './modules/admin/review-popup/review-popup-routing.module';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { FuseModule } from '@fuse';
import { FuseConfigModule } from '@fuse/services/config';
import { FuseMockApiModule } from '@fuse/lib/mock-api';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { mockApiServices } from 'app/mock-api';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { ReviewPopupComponent } from './modules/admin/review-popup/review-popup.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';
import { NewOfferComponent } from './modules/admin/new-offer/new-offer.component';
import { OnboardingCandidatesComponent } from './modules/admin/onboarding-candidates/onboarding-candidates.component';
import { OnboardingDetailComponent } from './modules/admin/onboarding-detail/onboarding-detail.component';
import { EmployeePopupComponent } from './modules/admin/employee-popup/employee-popup.component';
import { EmployeesListComponent } from './modules/admin/employees-list/employees-list.component';
import { SupportTicketDetailComponent } from './modules/admin/support-ticket-detail/support-ticket-detail.component';
import { NewSupportTicketComponent } from './modules/admin/new-support-ticket/new-support-ticket.component';
import { RequestPermissionPopupComponent } from './modules/admin/request-permission-popup/request-permission-popup.component';
import { SupportTicketFinalComponent } from './modules/admin/support-ticket-final/support-ticket-final.component';
import { SettingsEditComponent } from './modules/admin/settings-edit/settings-edit.component';
import { OnboardingComponent } from './onboarding/onboarding.component';

const routerConfig: ExtraOptions = {
    preloadingStrategy       : PreloadAllModules,
    scrollPositionRestoration: 'enabled'
};

@NgModule({
    declarations: [
        AppComponent,
        ReviewPopupComponent,
        DashboardComponent,
        NewOfferComponent,
        OnboardingCandidatesComponent,
        OnboardingDetailComponent,
        EmployeePopupComponent,
        EmployeesListComponent,
        SupportTicketDetailComponent,
        NewSupportTicketComponent,
        RequestPermissionPopupComponent,
        SupportTicketFinalComponent,
        SettingsEditComponent,
        OnboardingComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),

        // Fuse, FuseConfig & FuseMockAPI
        FuseModule,
        FuseConfigModule.forRoot(appConfig),
        FuseMockApiModule.forRoot(mockApiServices),

        // Core module of your application
        CoreModule,

        // Layout module of your application
        LayoutModule,

        // 3rd party modules that require global configuration via forRoot
        MarkdownModule.forRoot({}),
        MatDialogModule,
        MatFormFieldModule,
        CommonModule,
        ReviewPopupRoutingModule,
        MatSelectModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatDatepickerModule,
        MatMenuModule,
        MatNativeDateModule,
        MatTabsModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
