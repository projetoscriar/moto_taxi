$(document).on('pageinit', function() {

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

    /*
     $('#frm_login').submit(function(e) {
     
     e.preventDefault();
     $.mobile.changePage('#dialogPage', {transition: "pop", role:"dialog"});
     
     //_constant.redirect('menu.html');       
     });*/

});
