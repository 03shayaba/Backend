const express = require("express");
const path = require("path");
const UserRoutes = require("./Routes/userRoutes.js");
const Urlroutes = require("./Routes/Url.js");
const staticRoutes = require("./Routes/Static-routes.js")
const connectDB = require("./connect");
const { restrictTologgedInUserOnly, checkAuth } = require('./middleware/auth_middle.js')
const User = require("./Models/user.js");
const cookieParser = require("cookie-parser");
const app = express();
const Url = require("./Models/url.js");

const Port = 3500;
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
connectDB();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// app.get("/", async (req, res) => {
//   // const allUrls = await URL.find({});
//   return res.render("home");
// });
// app.get("/test", async (req, res) => {
//   const allUrls = await Url.find({});
//   return res.render("home",{
//     urls : allUrls,
//     name:"shayaba"
//   });
// });


app.use("/url",  restrictTologgedInUserOnly , Urlroutes);
app.use("/user",  UserRoutes);
app.use("/", checkAuth, staticRoutes);
app.use("/user", staticRoutes);



app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await Url.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory:{ 
            timestamp:Date.now()},
      },
    }
  )

   if (!entry) {
      return res.status(404).send("Short URL not found!");
    }

  res.redirect(entry.redirectURL)
});

app.listen(Port, () => {
  console.log(`Server is running on the port ${Port}`);
});
