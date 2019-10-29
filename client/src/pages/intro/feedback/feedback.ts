import { AfterViewInit, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from 'app/routes';
import { IAnalyticsService, ANALYTICS_SERVICE } from 'services/analytics';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-page-intro-feedback',
  templateUrl: './feedback.html',
  styleUrls: ['./feedback.scss']
})
export class IntroFeedbackPageComponent implements AfterViewInit {
  constructor( private router: Router,
               @Inject(ANALYTICS_SERVICE) private analyticsService: IAnalyticsService ) {
  }

  ngAfterViewInit() {
    this.analyticsService.logPageView(this.router.url, 'Intro - Feedback');
  }

  onNextClick() {
    if (environment.pages.termsAndPrivacy.enabled) {
      this.router.navigateByUrl(AppRoutes.IntroTermsAndConditions);
    } else {
      this.router.navigateByUrl(AppRoutes.ImageSource);
    }
  }
}
