var str = "Lorem ipsum dolor sit amet, 'consectetur' adipisicing 'elit'.";

console.log( str.replace( /'/g, '"' ) );

//2
var str = "'Lorem ipsu'm dolor sit amet, 'consectetur' adipisicing 'elit'.'";

console.log( str.replace( /(?:^'(.+)')/gm, '"$1"' ) );

//3
/*function check_input(value, pattern) {
    var pattern = new RegExp(pattern, 'gi');
    if (pattern.test(value)) {return true} else {return false};
}
function errorMsg(el) {
    var wrap = document.getElementById('errors');
    wrap.innerHTML = '';
    for (i=0; i<el.length; i++) {
        var el_name = document.querySelector('#' + el[i].id + ' + label').textContent;
        var msg = document.createElement('div');
        msg.classList.add('error_' + el[i].id);
        msg.innerHTML = 'Некорректно заполнено поле ' + el_name;
        wrap.appendChild(msg);
    }
}

window.onload = function () {
    var req_inputs = document.querySelectorAll('input[required]');
    var btn = document.querySelector('#message button');
    btn.addEventListener('click', function () {
//                var result = 0;
        for (var i=0; i<req_inputs.length; i++) {
            if (check_input(req_inputs[i].value, req_inputs[i].pattern)) {
                req_inputs[i].classList.add('good');
                req_inputs[i].classList.remove('bad');
            } else {
                req_inputs[i].classList.add('bad');
                req_inputs[i].classList.remove('good');
            }
        }
        var bad_inputs = document.querySelectorAll('input.bad');
        if (bad_inputs.length == 0) {
            alert ('Сообщение отправлено!');
        } else {
            errorMsg(bad_inputs);
        }
//                return false;
    })
}*/
/*----------------------------*/

jQuery(document).ready(function () {

  // табы от 4-го урока
 /*   var panels = $('.content > .panel');
    var tabs = $('.tabs>.tab');

    $('.tab').on('click', function () {
        tabs.removeClass('active');
        panels.removeClass('active');
        $(this).addClass('active');
        panels.eq($(this).index()).addClass('active');
    });

    $('#btn_vert').on('click', function () {
        $('.tab_container').css({'flexDirection':'row'});
        $('.tabs').css({'minWidth':'180px','display':'flex','flexDirection':'column'});

    });
    $('#btn_hor').on('click', function () {
        $('.tab_container').css({'flexDirection':'column'});
        $('.tabs').css({'minWidth':'0px','display':'flex','flexDirection':'row'});

    });*/

    //----------------------------------------------------------------


    $.datepicker.setDefaults( $.datepicker.regional[ "ru" ] );

    $('#cb-bd').datepicker({
        monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
        dayNamesMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
        firstDay:1,
        // changeMonth: true,
        changeYear: true,
        dateFormat:"dd.mm.yy",
        constrainInput: true,
        showOtherMonths: true
        }
    );

    $('.submit-form').on('focusout', '[required]', function () {
        if (Validate(this)) {
            $(this).addClass('good', 'fast');
            $("label[for='" + this.id + "'] > span:eq(0)").show('slide','fast');
        } else {
            $("label[for='" + this.id + "'] > span:eq(0)").hide('slide','fast');
            $(this)
                .removeClass('good','fast')
                .addClass('bad', 'fast')
                .effect('bounce');
            errMsg(this);
        }
    });


    function Validate(el) {
        var pattern = new RegExp(el.pattern, 'gi');
        if (pattern.test(el.value)) {return true} else {return false};
    }

    function errMsg(el) {
        var elName = $("label[for='" + el.id + "'] > span:eq(1)").text();
        var msg = '<p align="center">Некорректно заполнено поле <strong>"'+ elName +'"</strong><br>Попробуйте еще раз!</p>';
        $('#err_dialog')
            .empty()
            .append(msg)
            .dialog({
                width: 350,
                title: "Ошибка",
                modal: true,
                buttons: [{text: "OK", click: function() {$(this).dialog("close")}}],
                close: function( event, ui ) {
                    $(el)
                        .removeClass('bad','slow')
                        .focus();
                }
            });

    }

});
