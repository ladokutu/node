var sql = require('mssql');

var dbConfig = {
    server:'192.168.8.40',
    database:'DUAT_HR',
    user:'sa',
    password:'R4w493l4m5',
    port:1433
};

function getEmp() {
    var conn = new sql.Connection(dbConfig);
    var req = new sql.Request(conn);

    conn.connect(function(err) {
        if(err) {
            console.log(err);
            return;
        }
    else {
        console.log('success');
    }
});
}

getEmp();