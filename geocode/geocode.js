const request=require('request');
var geocodeAddress = (address) => {
  const ds=encodeURIComponent(address);
  request({url:`https://maps.googleapis.com/maps/api/geocode/json?address=${ds}`,
  json:true},(error,response,body)=>{
    if(error)
    {
      console.log('Unable to connect to google servers');
    }
    else if(body.status === 'ZERO_RESULTS')
    {
      console.log('Please submit correct address')
    }
    else if(body.status ==='OK')
    {
       console.log(`Address: ${body.results[0].formatted_address}`);
       console.log(`latitude: ${body.results[0].geometry.location.lat}`);
       console.log(`latitude: ${body.results[0].geometry.location.lng }`);
     }
  });
}
module.exports={
  geocodeAddress
};
