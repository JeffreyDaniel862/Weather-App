import 'dotenv/config';
import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
var data;

app.set("view-engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.post("/", async (req, res) => {
    try {
        var city = req.body.city
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + process.env.API_ID + "&units=metric";
        const response = await axios.get(url);
        data = response.data;
        var icon = data.weather[0].icon;
        var imageUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        res.render("index.ejs", { data: data, icon: imageUrl});
    } catch (error) {
        res.render("index.ejs");
    }
})

app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
})