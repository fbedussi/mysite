require('dotenv').config();
const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

const stage = process.argv[2] === 'stage';

const config = {
    user: stage ? process.env.FTP_USER_STAGE : process.env.FTP_USER,
    // Password optional, prompted if none given
    password: stage ? process.env.FTP_PASSWORD_STAGE : process.env.FTP_PASSWORD,
    host: process.env.FTP_HOST,
    port: 21,
    localRoot: __dirname + '/dist',
    remoteRoot: '/www.francescobedussi.it',
    // include: ['*', '**/*'],      // this would upload everything except dot files
    include: [
        '**/*',
    ],
    exclude: ['node_modules/**', 'node_modules/**/.*'],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true,
};

ftpDeploy
    .deploy(config)
    .then(res => console.log('finished:', res))
    .catch(err => console.log(err));
