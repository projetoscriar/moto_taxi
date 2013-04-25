function populateDB() {
    db.transaction(function(e) {
        e.executeSql('DROP TABLE IF EXISTS usuarios');
        e.executeSql('CREATE TABLE IF NOT EXISTS usuarios ("id" INTEGER , "usuario" VARCHAR(50), "senha" VARCHAR(50))');
        e.executeSql('INSERT INTO usuarios (id, usuario, senha) VALUES (1, "a" , "123")');
    });
}

function errorCB(err) {
    alert("Error processing SQL: " + err.code);
}

function successCB() {
    alert("success!");
}

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
                        alert("Informe login");
                    }
                });
    });

}

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
            logar(this);
        }
    });
 
});

function onDeviceReady() {
    checkConnection();
}

function checkConnection() {
    
}