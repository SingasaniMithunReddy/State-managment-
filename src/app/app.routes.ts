import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'HireJob.ai | Smart Hiring Portal',
    loadComponent: () => import('./features/home/home-page.component').then((m) => m.HomePageComponent)
  },
  {
    path: 'jobs',
    title: 'Jobs | HireJob.ai',
    loadComponent: () => import('./features/jobs/jobs-page.component').then((m) => m.JobsPageComponent)
  },
  {
    path: 'jobs/:id',
    title: 'Job Details | HireJob.ai',
    loadComponent: () => import('./features/jobs/job-detail-page.component').then((m) => m.JobDetailPageComponent)
  },
  {
    path: 'saved',
    title: 'Saved Jobs | HireJob.ai',
    loadComponent: () => import('./features/saved/saved-jobs-page.component').then((m) => m.SavedJobsPageComponent)
  },
  {
    path: 'applications',
    title: 'Applications | HireJob.ai',
    loadComponent: () => import('./features/applications/applications-page.component').then((m) => m.ApplicationsPageComponent)
  },
  {
    path: 'dashboard',
    title: 'Dashboard | HireJob.ai',
    loadComponent: () => import('./features/dashboard/dashboard-page.component').then((m) => m.DashboardPageComponent)
  },
  {
    path: 'employers',
    title: 'For Employers | HireJob.ai',
    loadComponent: () => import('./features/employers/employers-page.component').then((m) => m.EmployersPageComponent)
  },
  {
    path: 'case-study',
    title: 'Platform Case Study | HireJob.ai',
    loadComponent: () => import('./features/case-study/case-study-page.component').then((m) => m.CaseStudyPageComponent)
  },
  {
    path: 'login',
    title: 'Login | HireJob.ai',
    loadComponent: () => import('./features/auth/login-page.component').then((m) => m.LoginPageComponent)
  },
  {
    path: 'register',
    title: 'Register | HireJob.ai',
    loadComponent: () => import('./features/auth/register-page.component').then((m) => m.RegisterPageComponent)
  },
  {
    path: '**',
    title: 'Page Not Found | HireJob.ai',
    loadComponent: () => import('./features/not-found/not-found-page.component').then((m) => m.NotFoundPageComponent)
  }
];
