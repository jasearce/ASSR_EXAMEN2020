const dbConnection = require('../conf/dbConfig');
const connection = dbConnection();
const dict = {};
const dict2 = {};
let getCovid = async (req, res) =>{
    await connection.query("SELECT * FROM covid", (err, result) => {
        if (result) {
            res.send(result);
        } else {
            res.status(500).send(err);
        }
    });
};


let getTopFiveCovid = async (req, res) =>{
    const sqlRequest = 'SELECT `Country/Region`, `TotalCases` FROM covid order by `TotalCases` desc limit 5';
    await connection.query(sqlRequest, true, (err, result) => {
        if (result) {
            for (let i = 0; i < result.length; i++) {
                //console.log(Object.values((result[i])));
                dict[Object.values((result[i]))[0]]=Object.values((result[i]))[1];
            }
            
            res.send(dict);
        } else {
            res.status(500).send(err);
        }
    });
};

module.exports = {
    getCovid: getCovid,
    getTopFiveCovid: getTopFiveCovid,
}