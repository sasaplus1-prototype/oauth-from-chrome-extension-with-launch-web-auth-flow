'use strict';

const clientId = 'client_id';

const params = [
  `client_id=${clientId}`,
  'redirect_uri=urn:ietf:wg:oauth:2.0:oob:auto',
  'response_type=code',
  'scope=https://www.googleapis.com/auth/analytics.readonly',
].join('&');

chrome.identity.launchWebAuthFlow({
  url: `https://accounts.google.com/o/oauth2/auth?${params}`,
  interactive: true,
}, function(responseUrl) {
  console.log(responseUrl);
});
