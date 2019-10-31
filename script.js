#!/usr/bin/env node
const express = require('express')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
var cors = require('cors');

const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://elasticsearch:9200' })
var arr = require('./out.json');
const index = "hw7";
//const type = "test";


let main = async()=>{
     console.log(arr[0])
     for(let i = 0; i < arr.length; i++){
          const response = await client.index({
               index: index,
               body: arr[i]
               
          }).catch((e)=>{
               console.log(e)
          })
          sleep(5000);

          console.log(JSON.stringify(response));

     }

}
const sleep = (milliseconds) => {
     return new Promise(resolve => setTimeout(resolve, milliseconds))
}
main();
