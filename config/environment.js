
var environments = {
  staging: {
    FIREBASE_API_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    FIREBASE_AUTH_DOMAIN: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    FIREBASE_DATABASE_URL: 'xxxxxxxxxxxxxxxxxxxx',
    FIREBASE_PROJECT_ID: 'xxxxxxxxxxxxxxxxx',
    FIREBASE_STORAGE_BUCKET: 'xxxxxxxxxxxxx',
    FIREBASE_MESSAGING_SENDER_ID: 'xxxxxxxxx',
    GOOGLE_CLOUD_VISION_API_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
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