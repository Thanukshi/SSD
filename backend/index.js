/**
 * 
 * index file to handle all requests
 * author Thenuja
 * created for SSD assignment
 * 
 * */

 /**
 * 
 * initialize express
 * 
 * */
  const express = require('express')
  const app = express()
  /**
   * 
   * initialize port
   * 
   * */
  const port = 8000
  /**
   * 
   * initialize body parser
   * 
   * */
  const bodyParser = require('body-parser');
  /**
   * 
   * initialize cors
   * 
   * */
   const cors = require('cors');
   /**
    * 
    * initialize Google APIs
    * 
    * */
   const {google} = require('googleapis');
   /**
    * 
    * initialize multer
    * 
    * */
   const multer = require('multer');
   /**
    * 
    * initialize fs
    * 
    * */
   const fs = require("fs");
   /**
    * 
    * initialize formidable
    * 
    * */
   const formidable = require('formidable');
   
   /**
    * 
    * get client details from JSOM 
    * 
    * */
   const accessCredentials = require('./google_credentials/client_secret_322212537048-tp1g2qqskr5qrtk4kfulvd6mqqlqnpta.apps.googleusercontent.com.json');
   /**
    * 
    * get HTTP request
    * 
    * */
   const { request } = require('http');
   /**
    * 
    * client ID
    * 
    * */
   const clientID = accessCredentials.web.client_id;
   /**
    * 
    * client secret key
    * 
    * */
   const clientSecret = accessCredentials.web.client_secret;
   /**
    * 
    * redirect URI
    * 
    * */
   const redirectURIs = accessCredentials.web.redirect_uris;
   /**
    * 
    * OAuth client
    * 
    * */
   const oAuth2Client = new google.auth.OAuth2(clientID,clientSecret,redirectURIs[0]);
   
   /**
    * 
    * scopes
    * read meta data in drive
    * access user profile
    * upload files or images
    * 
    * */
   const ACCESS_SCOPE = ['https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/drive.file'] 
   /**
    * 
    * get output as a JSON format
    * 
    * */
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());
    app.use(cors());
    
    /**
     * 
     * get request
     * 
     * */
    app.get('/', (req, res) => {
      res.send('Back end api running')
    });
    
    /**
     * 
     * get authentication URL
     * 
     * */
     app.get('/getAuthURL',(req,res)=>{
        const authURL = oAuth2Client.generateAuthUrl({
            access_type:'offline',
            scope:ACCESS_SCOPE,
        });
        console.log(authURL);
        return res.send(authURL);
    });
    
    /**
     * 
     * get access token
     * @param access code
     * 
     * */
    