import { MockAnalyticsService } from 'services/mock/analytics';
import { MockImageRecognitionService } from 'services/mock/image-recognition';
import { APITranslationService } from 'services/api/translation';
import { APIFeedbackService } from 'services/api/feedback';
import { LocalProfileService } from 'services/local-profile';
import { MockFeedbackService } from 'services/mock/feedback';

const baseEndpointUrl = 'https://us-central1-barnard-yiddish.cloudfunctions.net';
const debugImageUrl = '/assets/debug/IMG_20190920_141505.jpg';

export const environment = {
  production: false,
  assets: {
    baseUrl: './',
  },
  pages: {
    splash: {
      duration: 5000,
      partnerLogoUrl: '/assets/debug/partner-logo.png'
    },
    translate: {
      debugImageUrl,
      debugWords: ['technology', 'ankle', 'book']
    },
    captionImage: {
      debugImageUrl
    },
    addWord: {
      maxRecordingDuration: 5000,
      recordingBufferSize: 4096,
      recordingMimeTypes: [ 'audio/webm', 'audio/mpeg', 'audio/wav' ],
      androidGBoardUrl: 'https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin',
      iosGBoardUrl: 'https://apps.apple.com/us/app/gboard-the-google-keyboard/id1091700242',
      keymanUrl: 'https://keyman.com/',
      progressAnimationInterval: 25
    }
  },
  components: {
    snackBar: {
      duration: 3000
    },
    cameraPreview: {
      resizeDelay: 1000
    },
    translationSelector: {
      scrollList: {
        animationInterval: 25,
        snapAcceleration: 10,
        snapMaxSpeed: 2,
        snapMinSpeed: 0.01,
        snapDecelerationDistance: 200,
        snapStickyDistance: 30,
        targetPositionRatio: 0.2
      },
      selectionLine: {
        animationInterval: 25,
        rotateSpeed: Math.PI * 2.0 * 0.7
      }
    }
  },
  services: {
    profile: {
      type: LocalProfileService,
      config: null
    },
    imageRecognition: {
      type: MockImageRecognitionService,
      config: null
    },
    imageRendering: {
      config: {
        dropShadowDistance: 1,
        dropShadowColor: 'rgba(0, 0, 0, 0.5)',
        foregroundColor: 'white',
        transliterationFont: '43px Roboto',
        transliterationBottom: 270,
        translationFont: '30px Roboto',
        translationBottom: 220,
        originalWordFont: '30px Roboto',
        originalWordBottom: 80,
        lineTop: 200,
        lineHeight: 80,
        lineWidth: 1
      }
    },
    translation: {
      type: APITranslationService,
      config: {
        endpointURL: `${baseEndpointUrl}/getTranslations`
      }
    },
    analytics: {
      type: MockAnalyticsService,
      config: null
    },
    feedback: {
      type: MockFeedbackService,
      config: {
        addWordAudioEndpointURL: `${baseEndpointUrl}/saveAudioSuggestions`,
        addWordEndpointURL: `${baseEndpointUrl}/addSuggestions`
      }
    }
  }
};
