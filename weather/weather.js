const request=require('request');

var getweather = () =>{

request({url:`https://api.darksky.net/forecast/ca80a2b940f74aaf17f76b1db1eb0c3c/13.0022332,77.5560725`,
json:true},(error,response,body)=>{
console.log(`Temperature:${body.currently.temperature}`);
//console.log(body);
});
  };

  module.exports.getweather=getweather;
