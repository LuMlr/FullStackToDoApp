const { pool } = require("pg")

const pool = new Pool({
    connectionString:
    "postgres://pebiuhcr:JuFD4T7bOEPFLJTCeW2AKABQOCBgn4g8@kandula.db.elephantsql.com/pebiuhcr",
});


module.exports = { pool };