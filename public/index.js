var desc = $(".description").text();
var temp = $(".value").text();
var hour = new Date().getHours();
if(hour >= 6 && hour <= 18){

    if(temp <= 20){
        if(desc.includes("clouds")){
            if(desc.includes("overcast")){
                $("body").css({"background-image":"url(images/lowovercast.jpg)"} )
            }else{
                $("body").css({"background-image":"url(images/lowclouds.jpg)"} )
            }
        }else if (desc.includes("rain")){
            $("body").css({"background-image":"url(images/rain.jpg)"} )
        }else if (desc.includes("thunderstorm")){
            $("body").css({"background-image":"url(images/thunderstorm.gif)"} )
        }else if (desc.includes("sky")){
            $("body").css({"background-image":"url(images/lowclearsky.jpg)"} )
        }else{
            $("body").css({"background-image":"url(images/sky.jpg)"} )
        }

    } else if (temp > 20 && temp<= 39){
        if(desc === "broken clouds"){
            $("body").css({"background-image":"url(images/clouds.jpg)"} )
        }else if (desc === "overcast clouds"){
            $("body").css({"background-image":"url(images/sunnyovercast.jpg)"} )
        }else if(desc === "scattered clouds"){
            $("body").css({"background-image":"url(images/scatteredCloud.jpg)"} )
        }else if (desc.includes("rain")){
            $("body").css({"background-image":"url(images/raining.jpg)"} )
        }else if (desc.includes("drizzle")){
            $("body").css({"background-image":"url(images/drizzle.jpg)"} )
        }else if(desc.includes("thunderstorm")){
            $("body").css({"background-image":"url(images/thunderstorm.gif)"} )
        }else{
            $("body").css({"background-image":"url(images/haze.jpg)"} )        
        }

    }else{
       if(desc.includes("rain")){
        $("body").css({"background-image":"url(images/rain.jpg)"} )
       }else{
        $("body").css({"background-image":"url(images/sunny.jpeg)"} )
        $(".heading").css({"color":"red"} )
        $(".temp").css({"color":"red"} )
       }
    }
}
else{
    if(desc.includes("clouds")){
        $("body").css({"background-image":"url(images/nightclouds.jpg)"} )
    }else if (desc.includes("rain")){
        $("body").css({"background-image":"url(images/nightrain.jpg)"} )
    }else if(desc.includes("sky")){
        $("body").css({"background-image":"url(images/nightsky.jpg)"} )
    }else if(desc.includes("thunderstorm")){
        $("body").css({"background-image":"url(images/nightstorm.jpg)"} )
    }else{
        $("body").css({"background-image":"url(images/sky.jpg)"} ) 
    }
}