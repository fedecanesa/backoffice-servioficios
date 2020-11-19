/* DEPENDECIES */
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const URL_DB_BACKOFFICE = require("./config"); 

// APP 
const app = express();

// MIDDLEWARES 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// SETTINGS 
app.set("port", process.env.PORT || 3001);

/* ENDPOINTS */
app.use(require("./api/professionals"));
app.use(require("./api/admins"));


// DATABASE AND SERVER CONECTION
mongoose.connect(URL_DB_BACKOFFICE, { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (error) { console.log("Error on try connect database.\n") }
    else {
        console.log("Database conected.\n")

        app.listen(app.get("port"), (error) => {
            !error ? (
                console.log(`Server running in port ${app.get("port")}\n`)
            )
            : (console.log("Error at trying to run Backserver."))
            
        })
    }
})
/* Extra Function ------------------------------------------------------------ */
let validatePUTData = (professionalToPUT)=>{
    const { name, hourPrice, job, currency, rating, description, zone, imgUrl} = professionalToPUT;
    if ( name && hourPrice && job && currency && rating && description && zone && imgUrl ) { return true }
}