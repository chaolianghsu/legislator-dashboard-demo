const districtData = {
  politician: {
    political: '中國國民黨',
    name: '徐巧馨',
    fbid: 164872546882726,
    kw: '(羅智強|羅小強|羅痔瘡|羅智|羅智弱|羅自戕|騾子強)',
    district: '大安區,文山區',
    city: '臺北市',
    image: 'https://legislator-dashboard-api.opyek.xyz/media/image/messageImage_1685076006605.jpg',
  },
  opponents: [
    {
      political: '民進黨',
      name: '許淑華',
      fbid: 100720289384352,
      kw: '陳時中|陳clock|陳時鐘|陳鬧鐘|((時中)&(臺北|台北))',
      district: '內湖區,南港區',
      city: '臺北市',
      image: 'https://legislator-dashboard-api.opyek.xyz/media/image/messageImage_1685076032143.jpg',
    },
  ],
}

const competitionData = {
  許淑華: {
    comp: [
      {
        name: '羅智強',
        city: '臺北市',
        political: '中國國民黨',
      },
      {
        name: '陳時中',
        city: '臺北市',
        political: '民進黨',
      },
    ],
    data: [
      {
        name: '網路聲量',
        pc: [
          45.3,
          54.7,
        ],
        value: [
          20435,
          24647,
        ],
      },
      {
        name: '好感度',
        pc: [
          89,
          11,
        ],
        value: [
          2.19,
          0.27,
        ],
      },
      {
        name: '聲譽值',
        pc: [
          69.9,
          30.1,
        ],
        value: [
          84302,
          36332,
        ],
      },
      {
        name: '擴散廣度',
        pc: [
          48.9,
          51.1,
        ],
        value: [
          67,
          70,
        ],
      },
      {
        name: '互動強度',
        pc: [
          44.7,
          55.3,
        ],
        value: [
          31.3,
          38.7,
        ],
      },
      {
        name: '粉絲觸及力',
        pc: [
          87.8,
          12.2,
        ],
        value: [
          118901,
          16550,
        ],
      },
      {
        name: '社群互動力',
        pc: [
          92.4,
          7.6,
        ],
        value: [
          149251,
          12308,
        ],
      },
    ],
  },
}

export { districtData, competitionData }
