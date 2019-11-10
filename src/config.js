let host;
if (process.env['NODE_ENV'] == 'production') {
    host = '';
} else {
    host = 'http://localhost:3000';
}
export default {
    HOST: host,
}