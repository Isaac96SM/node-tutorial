//On linux if you move the file across partitions, the method fs.rename won't work instead use the module mv -npm install mv-
const http = require('http');
const formidable = require('formidable');
const mv = require('mv');

http.createServer((req, res) => {
    if (req.url == '/fileupload') {
        const form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
            const oldpath = files.filetoupload.path;
            const newpath = 'PROJECT_DIRECTORY/public/' + files.filetoupload.name;

            mv(oldpath, newpath, (err) => {
                if (err) throw err;

                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        res.writeHead(200, {"Content-Type": 'text/html'});

        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');

        return res.end();
    }
}).listen(8080);
//http://localhost:8080