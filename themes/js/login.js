$(document).on('pageinit', function() {
    document.addEventListener("deviceready", onDeviceReady, false);
    $('.bt_logar').click(function(e) {
        $('#dialogPage').popup();
        if ($('#usuario').val() == '') {
            $('#dialogPage').find('p').html('Informe o usuário');
            $('#dialogPage').popup("open", {positionTo: '#usuario'});
            $('#usuario').focus();
        } else if ($('#senha').val() == '') {
            $('#dialogPage').find('p').html('Informe a senha');
            $('#dialogPage').popup("open", {positionTo: '#senha'});
            $('#senha').focus();
        } else {
            _constant.redirect('menu.html');
        }
    });

});

// Wait for PhoneGap to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
//
function onDeviceReady() {
    alert("Banco");
    var db = window.openDatabase("taxi", "1.0", "PhoneGap Demo", 200000);
    db.transaction(populateDB, errorCB, successCB);
}

// Populate the database 
//
function populateDB(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS usuarios ("id" INTEGER , "usuario" VARCHAR(50), "senha" VARCHAR(50))');
    tx.executeSql('INSERT INTO usuarios ("id", "usuario", "senha") VALUES ("1", "a" , "123")');
}

// Transaction error callback
//
function errorCB(tx, err) {
    alert("Error processing SQL: " + err);
}

// Transaction success callback
//
function successCB() {
    alert("success!");
}




/*
 function logar(d) {
 
 var usuario = $(d).closest("form").find("#usuario").val().toLowerCase();
 var senha = $(d).closest("form").find("#senha").val().toLowerCase();
 var query = 'SELECT * FROM usuarios WHERE usuario="' + usuario + '" AND senha="' + senha + '"';
 var retorno = false;
 
 db.transaction(function(e) {
 e.executeSql(query, [],
 function(g, f) {
 if (f.rows.length != 0) {
 _constant.redirect('menu.html');
 } else {
 
 }
 },
 function(g, f) {
 verifica_tabelas();
 });
 });
 
 }
 
 function debug(a, b) {
 console.log(a + ': ' + ' Mesagem: ' + b + ' \n\n\n');
 }
 
 function populateDB() {
 db.transaction(function(e) {
 var c = 'DROP TABLE IF EXISTS usuarios';
 e.executeSql(c, [],
 function(f, e) {
 debug("QUERY", 'DROP TABLE IF EXISTS usuarios');
 },
 function(f, e) {
 debug("ERROR", e.message);
 });
 
 e.executeSql('CREATE TABLE IF NOT EXISTS usuarios ("id" INTEGER , "usuario" VARCHAR(50), "senha" VARCHAR(50))');
 e.executeSql('INSERT INTO usuarios ("id", "usuario", "senha") VALUES ("1", "a" , "123")');
 });
 }
 
 function errorCB(err) {
 alert("Error processing SQL: " + err.code);
 }
 
 function successCB() {
 alert("success!");
 }
 
 function onDeviceReady() {
 checkConnection();
 }
 
 function checkConnection() {
 
 }
 
 function verifica_tabelas() {
 var c = 'SELECT name FROM sqlite_master WHERE type="table" AND name="usuarios";';
 db.transaction(function(e) {
 e.executeSql(c, [],
 function(g, f) {
 //debug("QUERY", c);
 //debug("TOTAL", f.rows.length);
 if (f.rows.length != 0) {
 //debug("SUCESSO", 'Redirecionando para o login.');
 _configuracoes.verifica_usuarios();
 //_constant.redirect('index.html');
 } else {
 alert(f.message);
 populateDB();
 }
 },
 function(g, f) {
 alert(f.message);
 //debug("QUERY", c);
 //debug("ERROR", f.message);
 //_configuracoes.verifica_tabelas();
 });
 });
 }
 */