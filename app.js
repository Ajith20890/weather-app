
const yargs=require('yargs');
const geocode=require('./geocode/geocode.js')
const weather=require('./weather/weather.js');
const argv=yargs
    .options({
    a:{demand:true,alias:'address', describe:'address to fetch weather for',string:true}
})
.help()
.alias('help','h')
.argv;
console.log(argv);
//geocode.geocodeAddress(argv.address);
weather.getweather();
