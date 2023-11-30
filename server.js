const express=require("express");
const https=require("https")
const app=express()
app.set('view engine', 'ejs')
app.use(express.static(__dirname+"/public"))

app.get("/",function(req,res){
    var dataObj,tempu,tempuu,humu,moiu;
    const url="https://api.thingspeak.com/channels/2112679/feeds.json?api_key=VJY1DA4N6AU2I2A6&results=2";
    https.get(url,function(response){
        response.on("data",function(data){
            dataObj=JSON.parse(data);
            tempu=dataObj.feeds[1].field1;
            humu=dataObj.feeds[1].field2;
            moiu=dataObj.feeds[1].field3; 
            tempuu=parseInt(tempu);
            humu=parseInt(humu);
            moiu=parseInt(moiu);
            console.log(tempu)
            console.log(tempuu)
            console.log(humu)
            console.log(moiu)
            res.render('home.ejs',{tempX:tempuu , humu: humu ,moiu: moiu})
        })
    })
})

app.listen(3000,function(){
    console.log("Server is up and running");
})
