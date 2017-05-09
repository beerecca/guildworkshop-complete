const chance = require('chance')();

const START_DATE = '2017-01-01';
let dateIncrement = 0;

function feedbackItem(options = {}) {
  let date = options.date;
  if (!date) {
    dateIncrement = dateIncrement + chance.integer({ min: 0, max: 2 });
    date = addDays(new Date(START_DATE), dateIncrement);
  }
  return Object.assign(
    {
      rating: chance.integer({ min: 1, max: 5 }),
      creation_date: date.getTime(),
      comment: chance.sentence(),
      computed_location: chance.country({ full: true }),
      computed_browser: {
        Browser: sample(['Chrome', 'Firefox', 'Safari', 'IE']),
        Version: chance.integer({ min: 30, max: 50 }),
        Platform: sample(['MacOSX', 'Win7', 'Win8', 'Linux']),
        FullBrowser: sample(['Chrome', 'Firefox', 'Safari', 'IE 9.0', 'IE 8.0'])
      },
      email: chance.email(),
      ip: chance.ip()
    },
    options
  );
}

function feedbackItems(length = 42) {
  return Array.from(Array(length)).map(Fixtures.feedbackItem);
}

//      "browser": {
//        "onLine": true,
//        "product": "Gecko",
//        "appCodeName": "Mozilla",
//        "userAgent": "Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/32.0.1700.102 Safari\/537.36",
//        "platform": "MacIntel",
//        "appVersion": "5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/32.0.1700.102 Safari\/537.36",
//        "appName": "Netscape",
//        "vendorSub": "",
//        "vendor": "Google Inc.",
//        "productSub": "20030107",
//        "cookieEnabled": true,
//        "language": "fr"
//      },
//      "campaign": [],
//      "comment": "belle offre de services",
//      "computed_browser": {
//        "Browser": "Chrome",
//        "Version": "32.0",
//        "Platform": "MacOSX",
//        "FullBrowser": "Chrome"
//      },
//      "computed_location": "France",
//      "creation_date": 1391445344,
//      "custom": {
//        "subject": "compliment"
//      },
//      "email": "nicolas@usabilla.com",
//      "geo": {
//        "country": "FR",
//        "region": "A8",
//        "city": "Paris",
//        "lat": 48.8667,
//        "lon": 2.3333
//      },
//      "host": "https:\/\/usabilla.com",
//      "html_snippet": null,
//      "images": {
//        "screenshot": {
//          "uri": "52efc552b6679cfe6ede406c\/screenshot",
//          "width": 1583,
//          "height": 1835,
//          "url": "\/\/usabilla-feedback-live.s3.amazonaws.com\/52efc552b6679cfe6ede406c\/screenshot"
//        },
//        "thumbnail": {
//          "uri": "52efc552b6679cfe6ede406c\/thumbnail",
//          "width": 66,
//          "height": 66,
//          "url": "\/\/usabilla-feedback-live.s3.amazonaws.com\/52efc552b6679cfe6ede406c\/thumbnail"
//        },
//        "cropped": {
//          "uri": "52efc552b6679cfe6ede406c\/cropped",
//          "width": 470,
//          "height": 430,
//          "url": "\/\/usabilla-feedback-live.s3.amazonaws.com\/52efc552b6679cfe6ede406c\/cropped"
//        },
//        "grid": {
//          "uri": "52efc552b6679cfe6ede406c\/grid",
//          "width": 218,
//          "height": 152,
//          "url": "\/\/usabilla-feedback-live.s3.amazonaws.com\/52efc552b6679cfe6ede406c\/grid"
//        },
//        "list": {
//          "uri": "52efc552b6679cfe6ede406c\/list",
//          "width": 48,
//          "height": 48,
//          "url": "\/\/usabilla-feedback-live.s3.amazonaws.com\/52efc552b6679cfe6ede406c\/list"
//        },
//        "detail": {
//          "uri": "52efc552b6679cfe6ede406c\/detail",
//          "width": 258,
//          "height": 300,
//          "url": "\/\/usabilla-feedback-live.s3.amazonaws.com\/52efc552b6679cfe6ede406c\/detail"
//        }
//      },
//      "integrations_sent": {
//        "desk": 1
//      },
//      "ip": "xx.xx.xx.xx",
//      "labels": [
//        "compliment"
//      ],
//      "nps": null,
//      "original_size": [],
//      "performance": 3,
//      "public_id": "b7d11c1beed52fc80d4df09d761b332aaaa9be64",
//      "rating": 5,
//      "screen": {
//        "availWidth": 1440,
//        "availHeight": 874,
//        "availTop": 22,
//        "availLeft": 0,
//        "pixelDepth": 24,
//        "colorDepth": 24,
//        "width": 1440,
//        "height": 900
//      },
//      "site_id": "65faae774973",
//      "status": "new",
//      "tags": [],
//      "timing": {
//        "loadEventEnd": 1391444512508,
//        "loadEventStart": 1391444512495,
//        "domComplete": 1391444512495,
//        "domContentLoadedEventEnd": 1391444472165,
//        "domContentLoadedEventStart": 1391444472154,
//        "domInteractive": 1391444472154,
//        "domLoading": 1391444472081,
//        "responseEnd": 1391444472072,
//        "responseStart": 1391444472071,
//        "requestStart": 1391444471608,
//        "secureConnectionStart": 0,
//        "connectEnd": 1391444471606,
//        "connectStart": 1391444471606,
//        "domainLookupEnd": 1391444471606,
//        "domainLookupStart": 1391444471606,
//        "fetchStart": 1391444471606,
//        "redirectEnd": 0,
//        "redirectStart": 0,
//        "unloadEventEnd": 1391444472073,
//        "unloadEventStart": 1391444472073,
//        "navigationStart": 1391444471606
//      },
//      "url": "https:\/\/usabilla.com\/",
//      "viewport": {
//        "width": 1583,
//        "height": 865
//      },
//      "id": "52efc552b6679cfe6ede406c",
//      "starred": false
//    };

function sample(array) {
  return array[chance.integer({ min: 0, max: array.length - 1 })];
}

function addDays(date, days) {
  var dat = new Date(date.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
}

module.exports = { feedbackItem, feedbackItems };
