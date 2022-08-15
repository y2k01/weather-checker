import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      visibility: 'visibility',
      wind: 'wind',
      sunrise: 'sunrise',
      humidity: 'humidity',
      cloudiness: 'cloudiness',
      sunset: 'sunset',
      km: 'km',
      kmperhour: 'km/h',
      switch: 'Switch to Russian \uD83C\uDDF7\uD83C\uDDFA',
      install: 'Install this app',
      AF: 'Afghanistan',
      AL: 'Albania',
      DZ: 'Algeria',
      AS: 'American Samoa',
      AD: 'Andorra',
      AO: 'Angola',
      AI: 'Anguilla',
      AQ: 'Antarctica',
      AG: 'Antigua and Barbuda',
      AR: 'Argentina',
      AM: 'Armenia',
      AW: 'Aruba',
      AU: 'Australia',
      AT: 'Austria',
      AZ: 'Azerbaijan',
      BS: 'Bahamas ',
      BH: 'Bahrain',
      BD: 'Bangladesh',
      BB: 'Barbados',
      BY: 'Belarus',
      BE: 'Belgium',
      BZ: 'Belize',
      BJ: 'Benin',
      BM: 'Bermuda',
      BT: 'Bhutan',
      BO: 'Bolivia (Plurinational State of)',
      BQ: 'Bonaire, Sint Eustatius and Saba',
      BA: 'Bosnia and Herzegovina',
      BW: 'Botswana',
      BV: 'Bouvet Island',
      BR: 'Brazil',
      IO: 'British Indian Ocean Territory ',
      BN: 'Brunei Darussalam',
      BG: 'Bulgaria',
      BF: 'Burkina Faso',
      BI: 'Burundi',
      CV: 'Cabo Verde',
      KH: 'Cambodia',
      CM: 'Cameroon',
      CA: 'Canada',
      KY: 'Cayman Islands ',
      CF: 'Central African Republic ',
      TD: 'Chad',
      CL: 'Chile',
      CN: 'China',
      CX: 'Christmas Island',
      CC: 'Cocos (Keeling) Islands ',
      CO: 'Colombia',
      KM: 'Comoros ',
      CD: 'Congo (the Democratic Republic of the)',
      CG: 'Congo ',
      CK: 'Cook Islands ',
      CR: 'Costa Rica',
      HR: 'Croatia',
      CU: 'Cuba',
      CW: 'Curaçao',
      CY: 'Cyprus',
      CZ: 'Czechia',
      CI: "Côte d'Ivoire",
      DK: 'Denmark',
      DJ: 'Djibouti',
      DM: 'Dominica',
      DO: 'Dominican Republic ',
      EC: 'Ecuador',
      EG: 'Egypt',
      SV: 'El Salvador',
      GQ: 'Equatorial Guinea',
      ER: 'Eritrea',
      EE: 'Estonia',
      SZ: 'Eswatini',
      ET: 'Ethiopia',
      FK: 'Falkland Islands  [Malvinas]',
      FO: 'Faroe Islands ',
      FJ: 'Fiji',
      FI: 'Finland',
      FR: 'France',
      GF: 'French Guiana',
      PF: 'French Polynesia',
      TF: 'French Southern Territories ',
      GA: 'Gabon',
      GM: 'Gambia ',
      GE: 'Georgia',
      DE: 'Germany',
      GH: 'Ghana',
      GI: 'Gibraltar',
      GR: 'Greece',
      GL: 'Greenland',
      GD: 'Grenada',
      GP: 'Guadeloupe',
      GU: 'Guam',
      GT: 'Guatemala',
      GG: 'Guernsey',
      GN: 'Guinea',
      GW: 'Guinea-Bissau',
      GY: 'Guyana',
      HT: 'Haiti',
      HM: 'Heard Island and McDonald Islands',
      VA: 'Holy See ',
      HN: 'Honduras',
      HK: 'Hong Kong',
      HU: 'Hungary',
      IS: 'Iceland',
      IN: 'India',
      ID: 'Indonesia',
      IR: 'Iran (Islamic Republic of)',
      IQ: 'Iraq',
      IE: 'Ireland',
      IM: 'Isle of Man',
      IL: 'Israel',
      IT: 'Italy',
      JM: 'Jamaica',
      JP: 'Japan',
      JE: 'Jersey',
      JO: 'Jordan',
      KZ: 'Kazakhstan',
      KE: 'Kenya',
      KI: 'Kiribati',
      KP: "Korea (the Democratic People's Republic of)",
      KR: 'Korea (the Republic of)',
      KW: 'Kuwait',
      KG: 'Kyrgyzstan',
      LA: "Lao People's Democratic Republic ",
      LV: 'Latvia',
      LB: 'Lebanon',
      LS: 'Lesotho',
      LR: 'Liberia',
      LY: 'Libya',
      LI: 'Liechtenstein',
      LT: 'Lithuania',
      LU: 'Luxembourg',
      MO: 'Macao',
      MG: 'Madagascar',
      MW: 'Malawi',
      MY: 'Malaysia',
      MV: 'Maldives',
      ML: 'Mali',
      MT: 'Malta',
      MH: 'Marshall Islands ',
      MQ: 'Martinique',
      MR: 'Mauritania',
      MU: 'Mauritius',
      YT: 'Mayotte',
      MX: 'Mexico',
      FM: 'Micronesia (Federated States of)',
      MD: 'Moldova (the Republic of)',
      MC: 'Monaco',
      MN: 'Mongolia',
      ME: 'Montenegro',
      MS: 'Montserrat',
      MA: 'Morocco',
      MZ: 'Mozambique',
      MM: 'Myanmar',
      NA: 'Namibia',
      NR: 'Nauru',
      NP: 'Nepal',
      NL: 'Netherlands ',
      NC: 'New Caledonia',
      NZ: 'New Zealand',
      NI: 'Nicaragua',
      NE: 'Niger ',
      NG: 'Nigeria',
      NU: 'Niue',
      NF: 'Norfolk Island',
      MP: 'Northern Mariana Islands ',
      NO: 'Norway',
      OM: 'Oman',
      PK: 'Pakistan',
      PW: 'Palau',
      PS: 'Palestine, State of',
      PA: 'Panama',
      PG: 'Papua New Guinea',
      PY: 'Paraguay',
      PE: 'Peru',
      PH: 'Philippines ',
      PN: 'Pitcairn',
      PL: 'Poland',
      PT: 'Portugal',
      PR: 'Puerto Rico',
      QA: 'Qatar',
      MK: 'Republic of North Macedonia',
      RO: 'Romania',
      RU: 'Russian Federation ',
      RW: 'Rwanda',
      RE: 'Réunion',
      BL: 'Saint Barthélemy',
      SH: 'Saint Helena, Ascension and Tristan da Cunha',
      KN: 'Saint Kitts and Nevis',
      LC: 'Saint Lucia',
      MF: 'Saint Martin (French part)',
      PM: 'Saint Pierre and Miquelon',
      VC: 'Saint Vincent and the Grenadines',
      WS: 'Samoa',
      SM: 'San Marino',
      ST: 'Sao Tome and Principe',
      SA: 'Saudi Arabia',
      SN: 'Senegal',
      RS: 'Serbia',
      SC: 'Seychelles',
      SL: 'Sierra Leone',
      SG: 'Singapore',
      SX: 'Sint Maarten (Dutch part)',
      SK: 'Slovakia',
      SI: 'Slovenia',
      SB: 'Solomon Islands',
      SO: 'Somalia',
      ZA: 'South Africa',
      GS: 'South Georgia and the South Sandwich Islands',
      SS: 'South Sudan',
      ES: 'Spain',
      LK: 'Sri Lanka',
      SD: 'Sudan ',
      SR: 'Suriname',
      SJ: 'Svalbard and Jan Mayen',
      SE: 'Sweden',
      CH: 'Switzerland',
      SY: 'Syrian Arab Republic',
      TW: 'Taiwan',
      TJ: 'Tajikistan',
      TZ: 'Tanzania, United Republic of',
      TH: 'Thailand',
      TL: 'Timor-Leste',
      TG: 'Togo',
      TK: 'Tokelau',
      TO: 'Tonga',
      TT: 'Trinidad and Tobago',
      TN: 'Tunisia',
      TR: 'Turkey',
      TM: 'Turkmenistan',
      TC: 'Turks and Caicos Islands ',
      TV: 'Tuvalu',
      UG: 'Uganda',
      UA: 'Ukraine',
      AE: 'United Arab Emirates ',
      GB: 'United Kingdom of Great Britain and Northern Ireland ',
      UM: 'United States Minor Outlying Islands ',
      US: 'United States of America ',
      UY: 'Uruguay',
      UZ: 'Uzbekistan',
      VU: 'Vanuatu',
      VE: 'Venezuela (Bolivarian Republic of)',
      VN: 'Viet Nam',
      VG: 'Virgin Islands (British)',
      VI: 'Virgin Islands (U.S.)',
      WF: 'Wallis and Futuna',
      EH: 'Western Sahara',
      YE: 'Yemen',
      ZM: 'Zambia',
      ZW: 'Zimbabwe',
      AX: 'Åland Islands'
    }
  },
  ru: {
    translation: {
      visibility: 'видимость',
      wind: 'ветер',
      sunrise: 'восход солнца',
      humidity: 'влажность',
      cloudiness: 'облачность',
      sunset: 'закат',
      km: 'км',
      kmperhour: 'км/ч',
      switch: 'Переключить на английский \uD83C\uDDEC\uD83C\uDDE7',
      install: 'Установить это приложение',
      AF: 'Афганистан',
      AL: 'Албания',
      DZ: 'Алжир',
      AS: 'Американское Самоа',
      AD: 'Андорра',
      AO: 'Ангола',
      AI: 'Ангилья',
      AQ: 'Антарктида',
      AG: 'Антигуа и Барбуда',
      AR: 'Аргентина',
      AM: 'Армения',
      AW: 'Аруба',
      AU: 'Австралия',
      AT: 'Австрия',
      AZ: 'Азербайджан',
      BS: 'Багамы ',
      BH: 'Бахрейн',
      BD: 'Бангладеш',
      BB: 'Барбадос',
      BY: 'Беларусь',
      BE: 'Бельгия',
      BZ: 'Белиз',
      BJ: 'Бенин',
      BM: 'Бермуды',
      BT: 'Бутан',
      BO: 'Боливия',
      BQ: 'Бонайре, Синт-Эстатиус и Саба',
      BA: 'Босния и Герцеговина',
      BW: 'Ботсвана',
      BV: 'Остров Буве',
      BR: 'Бразилия',
      IO: 'Британская территория в Индийском океане',
      БН: 'Бруней-Даруссалам',
      БГ: 'Болгария',
      БФ: 'Буркина-Фасо',
      BI: 'Бурунди',
      CV: 'Кабо-Верде',
      KH: 'Камбоджа',
      CM: 'Камерун',
      CA: 'Канада',
      KY: 'Каймановы острова',
      CF: 'Центральноафриканская Республика ',
      TD: 'Чад',
      CL: 'Чили',
      CN: 'Китай',
      CX: 'Остров Рождества',
      CC: 'Кокосовые острова',
      CO: 'Колумбия',
      КМ: 'Коморские острова ',
      CD: 'Конго (Демократическая Республика)',
      CG: 'Конго ',
      CK: 'Острова Кука',
      CR: 'Коста-Рика',
      HR: 'Хорватия',
      CU: 'Куба',
      CW: 'Кюрасао',
      CY: 'Кипр',
      CZ: 'Чехия',
      CI: "Кот-д'Ивуар",
      DK: 'Дания',
      DJ: 'Джибути',
      DM: 'Доминика',
      DO: 'Доминиканская Республика ',
      EC: 'Эквадор',
      EG: 'Египет',
      SV: 'Сальвадор',
      GQ: 'Экваториальная Гвинея',
      ER: 'Эритрея',
      EE: 'Эстония',
      SZ: 'Эсватини',
      ET: 'Эфиопия',
      FK: 'Фолклендские острова  [Мальвинские]',
      FO: 'Фарерские острова ',
      FJ: 'Фиджи',
      FI: 'Финляндия',
      FR: 'Франция',
      GF: 'Французская Гвиана',
      PF: 'Французская Полинезия',
      TF: 'Французские южные территории',
      ГА: 'Габон',
      GM: 'Гамбия ',
      GE: 'Грузия',
      DE: 'Германия',
      GH: 'Гана',
      GI: 'Гибралтар',
      GR: 'Греция',
      GL: 'Гренландия',
      GD: 'Гренада',
      ГП: 'Гваделупа',
      ГУ: 'Гуам',
      GT: 'Гватемала',
      GG: 'Гернси',
      GN: 'Гвинея',
      GW: 'Гвинея-Бисау',
      ГГ: 'Гайана',
      HT: 'Гаити',
      HM: 'Остров Херд и острова Макдональд',
      VA: 'Святой Престол ',
      HN: 'Гондурас',
      HK: 'Гонконг',
      HU: 'Венгрия',
      IS: 'Исландия',
      IN: 'Индия',
      ID: 'Индонезия',
      IR: 'Иран (Исламская Республика)',
      IQ: 'Ирак',
      IE: 'Ирландия',
      IM: 'Остров Мэн',
      IL: 'Израиль',
      IT: 'Италия',
      JM: 'Ямайка',
      JP: 'Япония',
      JE: 'Джерси',
      JO: 'Иордания',
      KZ: 'Казахстан',
      KE: 'Кения',
      KI: 'Кирибати',
      KP: 'Корея (Народно-Демократическая Республика)',
      KR: 'Корея (Республика)',
      KW: 'Кувейт',
      КГ: 'Кыргызстан',
      LA: 'Лаосская Народно-Демократическая Республика ',
      LV: 'Латвия',
      ЛБ: 'Ливан',
      ЛС: 'Лесото',
      ЛР: 'Либерия',
      LY: 'Ливия',
      LI: 'Лихтенштейн',
      LT: 'Литва',
      LU: 'Люксембург',
      МО: 'Макао',
      MG: 'Мадагаскар',
      MW: 'Малави',
      MY: 'Малайзия',
      MV: 'Мальдивы',
      ML: 'Мали',
      MT: 'Мальта',
      MH: 'Маршалловы острова ',
      MQ: 'Мартиника',
      MR: 'Мавритания',
      MU: 'Маврикий',
      YT: 'Майотта',
      MX: 'Мексика',
      FM: 'Микронезия (Федеративные Штаты)',
      MD: 'Молдова (Республика)',
      MC: 'Монако',
      MN: 'Монголия',
      ME: 'Черногория',
      MS: 'Монтсеррат',
      MA: 'Марокко',
      MZ: 'Мозамбик',
      ММ: 'Мьянма',
      NA: 'Намибия',
      НР: 'Науру',
      NP: 'Непал',
      NL: 'Нидерланды ',
      NC: 'Новая Каледония',
      НЗ: 'Новая Зеландия',
      NI: 'Никарагуа',
      NE: 'Нигер ',
      NG: 'Нигерия',
      NU: 'Ниуэ',
      NF: 'Остров Норфолк',
      MP: 'Северные Марианские острова ',
      NO: 'Норвегия',
      ОМ: 'Оман',
      PK: 'Пакистан',
      PW: 'Палау',
      PS: 'Палестина, государство',
      ПА: 'Панама',
      ПГ: 'Папуа - Новая Гвинея',
      PY: 'Парагвай',
      PE: 'Перу',
      PH: 'Филиппины ',
      PN: 'Питкэрн',
      PL: 'Польша',
      PT: 'Португалия',
      PR: 'Пуэрто-Рико',
      КК: 'Катар',
      MK: 'Республика Северная Македония',
      RO: 'Румыния',
      RU: 'Российская Федерация ',
      RW: 'Руанда',
      RE: 'Реюньон',
      BL: 'Сен-Бартелеми',
      SH: 'Святая Елена, Вознесение и Тристан-да-Кунья',
      KN: 'Сент-Китс и Невис',
      LC: 'Сент-Люсия',
      MF: 'Сент-Мартин (французская часть)',
      PM: 'Сен-Пьер и Микелон',
      VC: 'Сент-Винсент и Гренадины',
      WS: 'Самоа',
      SM: 'Сан-Марино',
      ST: 'Сан-Томе и Принсипи',
      SA: 'Саудовская Аравия',
      SN: 'Сенегал',
      RS: 'Сербия',
      SC: 'Сейшельские острова',
      SL: 'Сьерра-Леоне',
      SG: 'Сингапур',
      SX: 'Синт-Мартен (голландская часть)',
      SK: 'Словакия',
      SI: 'Словения',
      SB: 'Соломоновы острова',
      SO: 'Сомали',
      ZA: 'Южная Африка',
      GS: 'Южная Георгия и Южные Сандвичевы острова',
      SS: 'Южный Судан',
      ES: 'Испания',
      LK: 'Шри-Ланка',
      SD: 'Судан ',
      SR: 'Суринам',
      SJ: 'Шпицберген и Ян-Майен',
      SE: 'Швеция',
      CH: 'Швейцария',
      SY: 'Сирийская Арабская Республика',
      TW: 'Тайвань',
      TJ: 'Таджикистан',
      TZ: 'Танзания, Объединенная Республика',
      TH: 'Таиланд',
      TL: 'Тимор-Лешти',
      TG: 'Того',
      ТК: 'Токелау',
      TO: 'Тонга',
      TT: 'Тринидад и Тобаго',
      TN: 'Тунис',
      TR: 'Турция',
      TM: 'Туркменистан',
      TC: 'Острова Теркс и Кайкос ',
      TV: 'Тувалу',
      UG: 'Уганда',
      UA: 'Украина',
      ОАЭ: 'Объединенные Арабские Эмираты (страны)',
      GB: 'Соединенное Королевство Великобритании и Северной Ирландии ',
      UM: 'Малые отдаленные острова Соединенных Штатов Америки ',
      US: 'Соединенные Штаты Америки ',
      UY: 'Уругвай',
      UZ: 'Узбекистан',
      VU: 'Вануату',
      VE: 'Венесуэла (Боливарианская Республика)',
      VN: 'Вьетнам',
      VG: 'Виргинские острова (Британские)',
      VI: 'Виргинские острова (США)',
      WF: 'Уоллис и Футуна',
      EH: 'Западная Сахара',
      YE: 'Йемен',
      ZM: 'Замбия',
      ZW: 'Зимбабве',
      AX: 'Аландские острова'
    }
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: window.localStorage.lang, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
