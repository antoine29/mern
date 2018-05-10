'use strict';

//OLD
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const Issue = require('./issue.js');

const app = express();
app.use(express.static('static'));
app.use(bodyParser.json());

//NEW
// import SourceMapSupport from 'source-map-support';
// SourceMapSupport.install();
// import 'babel-polyfill';

// import express from 'express';
// import bodyParser from 'body-parser';
// import { MongoClient } from 'mongodb';
// import Issue from './issue.js';

/*
if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const config = require('../webpack.config');
  config.entry.app.push('webpack-hot-middleware/client', 'webpack/hot/only-dev-server');
  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  const bundler = webpack(config);
  app.use(webpackDevMiddleware(bundler, { noInfo: true}));
  app.use(webpackHotMiddleware(bundler, { log: console.log}));
}
*/

/*
if (process.env.NODE_ENV !== 'production') {
  import webpack from 'webpack';
  import webpackDevMiddleware from 'webpack-dev-middleware';
  import webpackHotMiddleware from 'webpack-hot-middleware';

  import config from '../webpack.config';
  config.entry.app.push('webpack-hot-middleware/client', 'webpack/hot/only-dev-server');
  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  const bundler = webpack(config);
  app.use(webpackDevMiddleware(bundler, { noInfo: true}));
  app.use(webpackHotMiddleware(bundler, { log: console.log}));
}
*/

app.get('/api/issues', (req, res) => {
  db.collection('issues').find().toArray().then(issues => {
    const metadata = { total_count: issues.length };
    res.json({ _metadata: metadata, records: issues })
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});

app.post('/api/issues', (req, res) => {
  const newIssue = req.body;
  //newIssue.id = issues.length + 1;
  newIssue.created = new Date();

  if (!newIssue.status) newIssue.status = 'New';

  const err = Issue.validateIssue(newIssue);
  if (err){
    res.status(422).json({message: `Invalid request: ${err}`});
    return;
  };
  
  db.collection('issues').insertOne(newIssue).then(result =>
    db.collection('issues').find({ _id: result.insertedId}).limit(1).next()
   ).then(newIssue => {
     res.json(newIssue);
   }).catch(error => {
     console.log(error);
     res.status(500).json({ message: `Internal Server Error: ${error}`});
   });
  /*
  issues.push(newIssue);
  res.json(newIssue);
  */
});


/*
app.listen(3000, function(e){
  if(e) console.log("ERROR"); 
  console.log("App started on port 3000");
});
*/

//for mongodb
let db;
MongoClient.connect('mongodb://localhost').then(connection => {
  db = connection.db('issuetracker');
  app.listen(3000, () => {
      console.log('App started on port 3000: ');
    });
  }).catch(error => {
    console.log('ERROR: ', error);
});

