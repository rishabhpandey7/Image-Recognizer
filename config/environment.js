
var environments = {
  staging: {
    FIREBASE_API_KEY: 'AIzaSyB3-AI76-df62cAWGWeWIs4EJV8SSpZwE0',
    FIREBASE_AUTH_DOMAIN: 'image-recognition-447c4.firebaseapp.com',
    FIREBASE_DATABASE_URL: 'https://image-recognition-447c4.firebaseio.com',
    FIREBASE_PROJECT_ID: 'image-recognition-447c4',
    FIREBASE_STORAGE_BUCKET: 'image-recognition-447c4.appspot.com',
    FIREBASE_MESSAGING_SENDER_ID: '833297247044',
    GOOGLE_CLOUD_VISION_API_KEY: 'AIzaSyC-YTAGpkRmWyVYXznUi_WPP93rqtnQMrM'
  },
  production: {

  }
};

function getReleaseChannel() {
  let releaseChannel = Expo.Constants.manifest.releaseChannel;
  if (releaseChannel === undefined) {
    return 'staging';
  } else if (releaseChannel === 'staging') {
    return 'staging';
  } else {
    return 'staging';
  }
}
function getEnvironment(env) {
  console.log('Release Channel: ', getReleaseChannel());
  return environments[env];
}
var Environment = getEnvironment(getReleaseChannel());
export default Environment;