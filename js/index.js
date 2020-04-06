$(function() {
    // モーダル表示アクション
    $('#buy').on('click', handleForceShowModal);

    // 数量選択アクション
    $('.item-amount').on('change', handleSumSubtotal);

    // QRコート選択アクション
    $('.kyash-link').on('click', handleShowKyash);
    $('.paypay-link').on('click', handleShowPayPay);
    $('.linepay-link').on('click', handleShowLINEPay);
    $('.jcoin-link').on('click', handleShowJcoin);
});

function handleSumSubtotal() {
    let total = 0;
    $.each($('.item-card'), function(index, element) {
        const value = $(element).find('.item-value').val();
        const amount = $(element).find('.item-amount').val();
        total += value * amount;
    });
    $('#subtotal').text(total);
    $('#total').text(total);
}

function handleForceShowModal() {
    $('#modal').modal('show');
}

function handleShowKyash() {
    hideAllQRcode();
    $('#kyash').removeClass('d-none');
    $('.kyash-link').addClass('active');
    $('.kyash-link').addClass('disabled');
}

function handleShowPayPay() {
    hideAllQRcode();
    $('#paypay').removeClass('d-none');
    $('.paypay-link').addClass('active');
    $('.paypay-link').addClass('disabled');
}

function handleShowLINEPay() {
    hideAllQRcode();
    $('#linepay').removeClass('d-none');
    $('.linepay-link').addClass('active');
    $('.linepay-link').addClass('disabled');
}

function handleShowJcoin() {
    hideAllQRcode();
    $('#jcoin').removeClass('d-none');
    $('.jcoin-link').addClass('active');
    $('.jcoin-link').addClass('disabled');
}

function hideAllQRcode() {
    $('#kyash').addClass('d-none');
    $('#paypay').addClass('d-none');
    $('#linepay').addClass('d-none');
    $('#jcoin').addClass('d-none');

    $('.kyash-link').removeClass('active');
    $('.paypay-link').removeClass('active');
    $('.linepay-link').removeClass('active');
    $('.jcoin-link').removeClass('active');

    $('.kyash-link').removeClass('disabled');
    $('.paypay-link').removeClass('disabled');
    $('.linepay-link').removeClass('disabled');
    $('.jcoin-link').removeClass('disabled');
}