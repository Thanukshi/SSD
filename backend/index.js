
  const express = require('express')
  const app = express()
 
  const port = 8000

  const bodyParser = require('body-parser');

   const cors = require('cors');

   const {google} = require('googleapis');
 
   const multer = require('multer');

   const fs = require("fs");

   const formidable = require('formidable');

   const accessCredentials = require('./google_credentials/client_secret_322212537048-tp1g2qqskr5qrtk4kfulvd6mqqlqnpta.apps.googleusercontent.com.json');
  
   const { request } = require('http');

   const clientID = accessCredentials.web.client_id;
 
   const clientSecret = accessCredentials.web.client_secret;

   const redirectURIs = accessCredentials.web.redirect_uris;

   const oAuth2Client = new google.auth.OAuth2(clientID,clientSecret,redirectURIs[0]);

   const ACCESS_SCOPE = ['https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/drive.file'] 

    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());
    app.use(cors());

    app.get('/', (req, res) => {
      res.send('Back end api running')
    });
    

     app.get('/getAuthURL',(req,res)=>{
        const authURL = oAuth2Client.generateAuthUrl({
            access_type:'offline',
            scope:ACCESS_SCOPE,
        });
        console.log(authURL);
        return res.send(authURL);
    });

     app.post('/getToken',(req,res)=>{
        if(req.body.code == null) return res.status(400).send('Invalid Request');
        oAuth2Client.getToken(req.body.code, (err,token)=>{
          if(err){
            console.error('Error retreiving access token',err);
            return res.status(400).send('Error retreiving access token');
          }
          res.send(token);
        });
      });
      

      app.post('/getUserInfo', (req, res) => {
        if (req.body.token == null) return res.status(400).send('Token not found');
        oAuth2Client.setCredentials(req.body.token);
        const oauth2 = google.oauth2({ version: 'v2', auth: oAuth2Client });
      
        oauth2.userinfo.get((err, response) => {
            if (err) res.status(400).send(err);
            console.log(response.data);
            res.send(response.data);
        })
      });
      
      
      app.post('/readDrive', (req, res) => {
        if (req.body.token == null) return res.status(400).send('Token not found');
        oAuth2Client.setCredentials(req.body.token);
        const drive = google.drive({ version: 'v3', auth: oAuth2Client });
        drive.files.list({
            pageSize: 10,
        }, (err, response) => {
            if (err) {
                console.log('The API returned an error: ' + err);
                return res.status(400).send(err);
            }
            const files = response.data.files;
            if (files.length) {
                console.log('Files:');
                files.map((file) => {
                    console.log(`${file.name} (${file.id})`);
                });
            } else {
                console.log('No files found.');
            }
            res.send(files);
        });
      });

      app.post('/fileUpload', (req, res) => {
        var form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            if (err) return res.status(400).send(err);
            const token = JSON.parse(fields.token);
            console.log(token)
            if (token == null) return res.status(400).send('Token not found');
            oAuth2Client.setCredentials(token);
            console.log(files.file);
            const drive = google.drive({ version: "v3", auth: oAuth2Client });
            const fileMetadata = {
                name: files.file.name,
            };
            const media = {
                mimeType: files.file.type,
                body: fs.createReadStream(files.file.path),
            };
            drive.files.create(
                {
                    resource: fileMetadata,
                    media: media,
                    fields: "id",
                },
                (err, file) => {
                    oAuth2Client.setCredentials(null);
                    if (err) {
                        console.error(err);
                        res.status(400).send(err)
                    } else {
                        res.send('Successfully upload the file')
                    }
                }
            );
        });
      });
  
      app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
      })   
      
adafds