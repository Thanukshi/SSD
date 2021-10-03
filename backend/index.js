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
  