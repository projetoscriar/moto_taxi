var _constant = {
    version: "1.00.00",
    maxPaginacao: 10,
    titles: {
        aviso: 'Moto Taxi informa:',
        erro: 'Coto Taxi informa erros localizados:'
    },
    redirect: function(url) {
        window.location.href = url;
    }
};

$(document).bind("mobileinit", function() {
    $.extend($.mobile, {
        ajaxEnabled: false,
        touchOverflowEnabled: false,
        defaultPageTransition: 'none',
        defaultDialogTransition: 'none',
        loadingMessage: 'Carregando...',
        buttonMarkup: {hoverDelay: 0}
    });
});