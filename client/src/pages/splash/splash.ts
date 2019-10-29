import { AfterViewInit, Component, Inject, InjectionToken, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { IAnalyticsService, ANALYTICS_SERVICE } from 'services/analytics';
import { IProfileService, PROFILE_SERVICE } from 'services/profile';
import { AppRoutes } from 'app/routes';

interface SplashPageConfig {
  partnerLogoUrl?: string;
  duration: number;
}

export const SPLASH_PAGE_CONFIG = new InjectionToken<SplashPageConfig>('Splash page config');

@Component({
  selector: 'app-page-splash',
  templateUrl: './splash.html',
  styleUrls: ['./splash.scss']
})
export class SplashPageComponent implements AfterViewInit, OnDestroy {
  private timeout: any = null;
  public partnerLogoUrl?: string;

  constructor( @Inject(SPLASH_PAGE_CONFIG) private config: SplashPageConfig,
               private router: Router,
               @Inject(ANALYTICS_SERVICE) private analyticsService: IAnalyticsService,
               @Inject(PROFILE_SERVICE) private profileService: IProfileService) {
    this.partnerLogoUrl = config.partnerLogoUrl;
  }

  ngAfterViewInit() {
    this.analyticsService.logPageView(this.router.url, 'Splash');
    this.timeout = setTimeout(() => {
      this.profileService.loadProfile().then(
        (profile) => this.router.navigateByUrl(!profile.termsAgreed ? AppRoutes.Intro : AppRoutes.CaptureImage),
        () => this.router.navigateByUrl(AppRoutes.Intro)
      );
    }, this.config.duration);
  }

  ngOnDestroy() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }
}
