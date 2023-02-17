import { OnboardingModule } from './onboarding/onboarding.module';
import { OnboardingCandidatesModule } from './modules/admin/onboarding-candidates/onboarding-candidates.module';
import { OffersModule } from './modules/admin/offers/offers.module';
import { DashboardModule } from './modules/admin/dashboard/dashboard.module';
import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/example'
    {path: '', pathMatch : 'full', redirectTo: 'example'},

    // Redirect signed in user to the '/example'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'example'},

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
            {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
            {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)}
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)}
        ]
    },

    // Landing routes
    {
        path: '',
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        children   : [
            {path: 'sign', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
            {path: 'employee-sign', loadChildren: () => import('app/modules/employee/employee-sign-in/employee-sign-in.module').then(m => m.EmployeeSignInModule)},
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
            {path: 'onboarding', loadChildren: () => import('app/onboarding/onboarding.module').then(m => m.OnboardingModule)},
            {path: 'thank-you', loadChildren: () => import('app/onboarding/thankyou/thankyou-routing.module').then(m => m.ThankyouRoutingModule)},
            {path: 'error-message', loadChildren: () => import('app/onboarding/error/error-routing.module').then(m => m.ErrorRoutingModule)}
        ]
    },

    // Admin routes
    {
        path       : '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [            
            {path: 'example', loadChildren: () => import('app/modules/admin/example/example.module').then(m => m.ExampleModule)},
            {path: 'settings', loadChildren: () => import('app/modules/admin/settings/settings.module').then(m => m.SettingsModule)},
            {path: 'support-ticket', loadChildren: () => import('app/modules/admin/support-ticket/support-ticket.module').then(m => m.SupportTicketModule)},
            {path: 'employees', loadChildren: () => import('app/modules/admin/employees/employees.module').then(m => m.EmployeesModule)},
            {path: 'dashboard', loadChildren: () => import('app/modules/admin/dashboard/dashboard.module').then(m => m.DashboardModule)},
            {path: 'offers', loadChildren: () => import('app/modules/admin/offers/offers.module').then(m => m.OffersModule)},
            {path: 'new-offer', loadChildren: () => import('app/modules/admin/new-offer/new-offer.module').then(m => m.NewOfferModule)},
            {path: 'onboarding-candidates', loadChildren: () => import('app/modules/admin/onboarding-candidates/onboarding-candidates.module').then(m => m.OnboardingCandidatesModule)},
            {path: 'onboarding-detail', loadChildren: () => import('app/modules/admin/onboarding-detail/onboarding-detail.module').then(m => m.OnboardingDetailModule)},
            {path: 'employees-list', loadChildren: () => import('app/modules/admin/employees-list/employees-list.module').then(m => m.EmployeesListModule)},
            {path: 'support-ticket-detail', loadChildren: () => import('app/modules/admin/support-ticket-detail/support-ticket-detail.module').then(m => m.SupportTicketDetailModule)},
            {path: 'new-support-ticket', loadChildren: () => import('app/modules/admin/new-support-ticket/new-support-ticket.module').then(m => m.NewSupportTicketModule)},
            {path: 'support-ticket-final', loadChildren: () => import('app/modules/admin/support-ticket-final/support-ticket-final.module').then(m => m.SupportTicketFinalModule)},
            {path: 'leaves', loadChildren: () => import('app/modules/admin/leaves/leaves.module').then(m => m.LeavesModule)},
            {path: 'settings-edit', loadChildren: () => import('app/modules/admin/settings-edit/settings-edit.module').then(m => m.SettingsEditModule)},

            // employee
            {path: 'emp-dashboard', loadChildren: () => import('app/modules/employee/emp-dashboard/emp-dashboard.module').then(m => m.EmpDashboardModule)},
            {path: 'emp-support-tiket', loadChildren: () => import('app/modules/employee/emp-support-tiket/emp-support-tiket-routing.module').then(m => m.EmpSupportTiketRoutingModule)},
            {path: 'emp-new-support-tiket', loadChildren: () => import('app/modules/employee/emp-new-support-tiket/emp-new-support-tiket-routing.module').then(m => m.EmpNewSupportTiketRoutingModule)},
            {path: 'emp-support-tiket-detail', loadChildren: () => import('app/modules/employee/emp-support-tiket-detail/emp-support-tiket-detail-routing.module').then(m => m.EmpSupportTiketDetailRoutingModule)},
            {path: 'emp-leaves', loadChildren: () => import('app/modules/employee/emp-leaves/emp-leaves-routing.module').then(m => m.EmpLeavesRoutingModule)},
            {path: 'apply-leaves', loadChildren: () => import('app/modules/employee/apply-leave/apply-leave-routing.module').then(m => m.ApplyLeaveRoutingModule)}
        ]
    }
];
