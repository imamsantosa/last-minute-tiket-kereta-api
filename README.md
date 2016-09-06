# Last minute http://tiket.kereta-api.co.id

Tidak jarang ketika mencari tiket kereta api, ternyata sudah tidak lagi tersedia. Biasanya, satu atau beberapa calon penumpang kereta akan melakukan pembatalan tiket untuk beberapa alasan. Program ini akan melakukan scraping berdasarkan input yang telah ditentukan untuk mengecek secara otomatis apakah tiket yang sudah habis terjual masih tersisa beberapa karena ada calon penumpang yang melakukan pembatalan tiket.

Waktu scraping dapat diatur setiap beberapa menit, dan ketika hasil scraping didapat, secara otomatis akan menampilkan notifikasi di desktop dengan sound dan text yang bisa diatur sendiri.

## Requirement
* NodeJS

## NodeJS Modules
* [request](https://www.npmjs.com/package/request "Simplified HTTP request client")
* [promisified-request](https://www.npmjs.com/package/promisified-request "Simple module wraps Mikeal's request module")
* [form-scraper](https://www.npmjs.com/package/form-scraper "Scrape and Submit forms easily")
* [cheerio](https://www.npmjs.com/package/cheerio "Implementation of core jQuery designed specifically for the server")
* [node-notifier](https://www.npmjs.com/package/node-notifier "A Node.js module for sending notifications on native Mac, Windows (post and pre 8) and Linux")
* [play-sound](https://www.npmjs.com/package/play-sound "Play audio files by shelling out to available audio tool")
* [moment](https://www.npmjs.com/package/moment "Parse, validate, manipulate, and display dates")

## Audio
* [alarm-frenzy.mp3](https://notificationsounds.com/ "Notification Sounds")
* [system-fault.mp3](https://notificationsounds.com/ "Notification Sounds")

## Penggunaan

Clone repository-nya dan jalankan:

```
npm install
```

Contoh format tanggal adalah sebagai berikut:

```
20160911#Minggu, 11 September 2016
```

Contoh format stasiun baik untuk <strong>origination</strong> maupun <strong>destination</strong> adalah sebagai berikut:

```
KD#KEDIRI
```

Untuk melihat daftar stasiun dan kodenya, silahkan kunjungi tautan [berikut](STASIUN.md).

Jika semua pengaturan sudah disesuaikan, untuk menjalankan programnya adalah dengan cara dieksekusi melalui command line:

```
node tiket.js
```

## License

The MIT License (MIT).