const PRODUCTS = [
    { name: "MONSTER ENERGY", price: 200, img: "monster.png" },
    { name: "MONSTER ENERGY ABUSOLUTELY ZERO", price: 200, img: "monster_zero.png" },
    { name: "MONSTER ENERGY ULTRA", price: 200, img: "monster_white.jpg" },
    { name: "MONSTER ENERGY PIPELINE PUNCH", price: 200, img: "monster_pink.jpg" },
    { name: "KIRKLAND WATER", price: 50, img: "costoco_water.png" },
    // { name: "CocaCola", price: 100, img: "cocacola.png" },
    // { name: "E3", price: 100, img: "e3.png" },
    // { name: "SHARK", price: 100, img: "shark.png" },
    // { name: "FIRE ONEDAY BLACK", price: 100, img: "oneday_black.png" },
    { name: "アポロ チョコレート", price: 30, img: "aporo_chocolate.png" },
    { name: "たべっ子どうぶつ", price: 30, img: "tabekko_animal.png" },
    { name: "たけのこの里", price: 30, img: "takenoko_vil.png" },
    { name: "じゃがりこ", price: 100, img: "no_image.png" },
    // { name: "おやつカルパス", price: 10, img: "oyatsu_karupasu.png" },
    // { name: "午後の紅茶 無糖", price: 100, img: "afternoon_tea_no_suger.png" },
    { name: "ラムネ", price: 30, img: "ramune.jpg" },
    { name: "日本のお茶(POM)", price: 100, img: "nihon_no_ocha_pom.jpg" },
];

$(function() {
    // 商品追加
    $('.products').html(createItemCards());

    // モーダル表示アクション
    $('#buy').on('click', handleForceShowModal);

    // 数量選択アクション
    $('.item-amount').on('change', handleSumSubtotal);

    // QRコード選択アクション
    $('.kyash-link').on('click', handleShowKyash);
    $('.paypay-link').on('click', handleShowPayPay);
    $('.linepay-link').on('click', handleShowLINEPay);
    $('.jcoin-link').on('click', handleShowJcoin);
});

function createItemCards() {
    var html = '<div class="row">';

    PRODUCTS.forEach(function(p) {
        html += '<div class="card item-card" style="width: 18rem;">'
                + '<img src="./image/card/' + p.img + '" class="card-img-top item-img" />'
                + '<div class="card-body">'
                    + '<h5 class="card-title">' + p.name + '</h5>'
                    + '<h5 class="card-title">'
                    + '</h5>'
                    + '<p class="card-text"></p>'
                + '</div>'
                + '<ul class="list-group list-group-flush">'
                    + '<li class="list-group-item">' + p.price + '円(税込) / 数量</li>'
                + '</ul>'
                + '<div class="card-footer">'
                    + '<div class="input-group">'
                        + '<input class="item-value" type="hidden" value="' + p.price + '" />'
                        + '<input class="form-control item-amount" type="number" value=0 min=0 />'
                            + '<div class="input-group-append">'
                                + '<span class="input-group-text" id="basic-addon2">数量</span>'
                            + '</div>'
                    + '</div>'
                + '</div>'
            + '</div>';
    });

    return html + '</div>';
}

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