var source   = document.getElementById("quadrato-template").innerHTML;
var template = Handlebars.compile(source);

for (var i = 0; i < 36; i++) {
    $('.griglia').append(template())
}

$('.quadrato').click(function(){
    quadrato_corrente = $(this)

    $.ajax({
        'url': 'https://flynn.boolean.careers/exercises/api/random/int',
        'method': 'GET',
        'success': function(data) {
            var numero_random = data.response;
            quadrato_corrente.children('.numero').text(numero_random)
            if (numero_random <= 5) {
                quadrato_corrente.addClass('giallo')
                quadrato_corrente.removeClass('verde')
            }
            else {
                quadrato_corrente.addClass('verde')
                quadrato_corrente.removeClass('giallo')
            }
        },
        'error': function() {
            alert('si è verificato un errore');
        }
    });
})
