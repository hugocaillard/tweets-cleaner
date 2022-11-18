module.exports = {
  consumer_key: '##',
  consumer_secret: '##',
  access_token_key: '##',
  access_token_secret: '##',
  path: './tweets.js', // path to the archive tweet.js file
  maxDate: false, // delete older than this eg: '2011-12-31 00:00:00 +0000'
  saveRegexp: [], // save tweets matching this regexp: eg ['#newavatar', '@\w+']
  callsInterval: 500 // ms
}
