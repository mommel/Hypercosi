const path = require('path');

const appName = 'HyperCoSi';
const appTeam = 'HyperCoSi Team';
const appVersion = require('../package.json').version;

module.exports = {
  APP_NAME: appName,
  APP_TEAM: appTeam,
  APP_VERSION: appVersion,
  APP_WINDOW_TITLE: appName,
  APP_COPYRIGHT: `Copyright © 2019- ${appTeam}`,
  APP_FILE_ICON: path.join(
    __dirname,
    'images',
    'icons',
    'mac',
    'icon.icns',
  ),
  APP_ICON: path.join(__dirname,
    'images',
    'icons',
    'win',
    'icon.ico'
  ),
  ANNOUNCEMENT_URL: 'https://DOMAIN/announcement',
  AUTO_UPDATE_URL: 'https://DOMAIN/update',
  CRASH_REPORT_URL: '', // 'https://DOMAIN/crash-report',
  GITHUB_URL: 'https://github.com/mommel/Hypercosi',
  GITHUB_URL_ISSUES: 'https://github.com/mommel/Hypercosi/issues',
  GITHUB_URL_RAW: 'https://github.com/mommel/Hypercosi/master',
  GITHUB_URL_RELEASES: 'https://github.com/mommel/Hypercosi/releases',
};
