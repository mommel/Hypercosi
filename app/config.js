const path = require('path')

const APP_NAME = 'HyperCoSi'
const APP_TEAM = 'HyperCoSi Team'
const APP_VERSION = require('../package.json').version

module.exports = {
  APP_NAME,
  APP_TEAM,
  APP_VERSION,
  APP_WINDOW_TITLE: APP_NAME,
  APP_COPYRIGHT: 'Copyright © 2019- ' + APP_TEAM,
  APP_FILE_ICON: path.join(
    __dirname,
    '..',
    'static',
    'WebTorrentFile',
  ),
  APP_ICON: path.join(__dirname, '..', 'static', 'WebTorrent'),
  ANNOUNCEMENT_URL: 'https://DOMAIN/announcement',
  AUTO_UPDATE_URL: 'https://DOMAIN/update',
  CRASH_REPORT_URL: 'https://DOMAIN/crash-report',
  GITHUB_URL: 'https://github.com/mommel/Hypercosi',
  GITHUB_URL_ISSUES: 'https://github.com/mommel/Hypercosi/issues',
  GITHUB_URL_RAW: 'https://github.com/mommel/Hypercosi/master',
  GITHUB_URL_RELEASES: 'https://github.com/mommel/Hypercosi/releases',
}
