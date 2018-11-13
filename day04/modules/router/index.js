module.exports = {
    news (req,res) {
        res.writeHead(200, {'ContentType': 'text/html;charset:"utf-8"'});
        res.write('news');
        res.end();
    },
    search (req,res) {
        res.writeHead(200, {'ContentType': 'text/html;charset:"utf-8"'});
        res.write('search');
        res.end();
    }
}
