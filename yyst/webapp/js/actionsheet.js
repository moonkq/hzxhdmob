$(function () {
    $('#onlineBtn').on('click', function () {
        $('#actionsheet').show().addClass('action-in');
        setTimeout(function () {
            $('#actionsheet').removeClass('action-in');
        }, 450);
    });
    $('#actionsheet .mask, #actionsheet .dismiss').on('click', function () {
        $('#actionsheet').addClass('action-out');
        setTimeout(function () {
            $('#actionsheet').removeClass('action-out').hide();
        }, 400);
    });
});