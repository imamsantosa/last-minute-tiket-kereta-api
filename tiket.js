var request = require('request');
request = request.defaults({jar: true});
var pRequest = require("promisified-request").create(request);
var fScraper = require("form-scraper");
var cheerio = require("cheerio");
var notifier = require('node-notifier');
var player = require('play-sound')(opts = {});
var moment = require('moment');

var formStructure = fScraper.fetchForm("#input", "https://tiket.kereta-api.co.id", pRequest);

/**
 * Rubah TANGGAL dengan format tanggal seperti pada halaman README.md
 * Rubah ORIGINATION dengan kode stasiun seperti pada halaman README.md
 * Rubah DESTINATION dengan kode stasiun seperti pada halaman README.md
 */
var formData = {
    tanggal: "TANGGAL",
    origination: "ORIGINATION",
    destination: "DESTINATION",
    adult: "1"
};

function go () {
    fScraper.submitForm(formData, fScraper.provideForm(formStructure), pRequest).then( function (response) {
        var $ = cheerio.load(response.body);
        /**
         * Pada variable result ini, saya melakukan pencarian dan mengambil baris terakhir dari halaman daftar kereta api
         * karena kebetulan waktu script ini dibuat, saya sedang mencari tiket kereta api KAHURIPAN
         * yang posisinya berada pada baris paling bawah (terakhir).
         * Jika ingin mencari tiket kereta lain, tentu perlu dirubah dan disesuaikan berdasarkan CSS Selector yang ada.
         */
        var result = $("tr.rowx").last().find('td.itright').html();

        if (result == '<span class="itAlertTextWarning" title="Sisa Tempat Duduk : 0">Habis</span>') {
            notifier.notify({
                'title': 'Belum',
                'message': "\nTiket belum tersedia."
            });
            player.play('system-fault.mp3', function(err){});
            console.log('HABIS: '+moment().calendar());
        } else {
            notifier.notify({
                'title': 'Ada',
                'message': "\nTiket sudah tersedia."
            });
            player.play('alarm-frenzy.mp3', function(err){});
            console.log('TERSEDIA: '+moment().calendar());
        }
    });

    setTimeout(go, 300000);
}
go();
