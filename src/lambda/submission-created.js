const NetlifyAPI = require('netlify')
const client = new NetlifyAPI(process.env.NETLIFY_ACCESS_TOKEN)

exports.handler = function(event, context, callback) {
  console.log('START HANDLER')
  console.log('START_EVENT', event, 'END_EVENT')
  console.log('START_CONTEXT', context, 'END_CONTEXT')
  console.log('START_CALLBACK', callback, 'END_CALLBACK')
  console.log('END HANDLER')
}
