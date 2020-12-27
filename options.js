const fs = require("fs");

module.exports = {
    serverproticals:{
        http:{
            on:true,
            port:8080,
            //ip:"127.0.0.1",
            app:"main"
        },
        https:{
            on:true,
            port:3443,
            app:"main",
            options:{
                key: fs.readFileSync('/root/CA/dashbord.1hvoip.com.key'),
                cert: fs.readFileSync('/root/CA/dashbord.1hvoip.com.crt')
            }
        }
    }
}