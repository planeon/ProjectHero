var mysql = require('mysql');

const con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "hero",
    password: ""
})


con.connect(function (err){
    if (err) throw err;

    console.log("connected");
    var sql="INSERT INTO hero (id,nickname,real_name,origin_description,superpowers,catch_phrase,Images) VALUES ?";
    var values = [


]
    con.query(sql,[values],function(err,result)
    {
        if (err) throw err;
        console.log("Добавленно:" + result.affectedRows)
    })
})

con.connect(function(err) {

    var sql = "DELETE FROM hero WHERE id = ''";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
});
