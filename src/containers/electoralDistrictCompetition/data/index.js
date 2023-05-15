const districtData = {
  politician: {
    political: '中國國民黨',
    name: '羅智強',
    fbid: 164872546882726,
    kw: '(羅智強|羅小強|羅痔瘡|羅智|羅智弱|羅自戕|騾子強)',
    district: '大安區,文山區',
    city: '臺北市',
    image: 'https://stationhousevets.com/wp-content/uploads/2021/10/closeup-shot-guinea-pig-isolated-scaled.jpg',
  },
  opponents: [
    {
      political: '民進黨',
      name: '陳時中',
      fbid: 100720289384352,
      kw: '陳時中|陳clock|陳時鐘|陳鬧鐘|((時中)&(臺北|台北))',
      district: '內湖區,南港區',
      city: '臺北市',
      image: 'https://i.pinimg.com/originals/ea/c7/ed/eac7edb0ae5a8730f88830e26e2bd8f2.jpg',
    },
    {
      political: '親民黨',
      name: '黃珊珊',
      fbid: 219146163517,
      kw: '黃珊珊|黃33|(黃副市長&台北)',
      district: '內湖區,南港區',
      city: '臺北市',
      image: 'https://i.redd.it/wdhdulfe8xu41.jpg',
    },
  ],
}

const competitionData = {
  陳時中: {
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
  黃珊珊: {
    comp: [
      {
        name: '羅智強',
        city: '臺北市',
        political: '中國國民黨',
      },
      {
        name: '黃珊珊',
        city: '臺北市',
        political: '親民黨',
      },
    ],
    data: [
      {
        name: '網路聲量',
        pc: [
          93.1,
          6.9,
        ],
        value: [
          20436,
          1523,
        ],
      },
      {
        name: '好感度',
        pc: [
          84.6,
          15.4,
        ],
        value: [
          2.19,
          0.4,
        ],
      },
      {
        name: '聲譽值',
        pc: [
          96.1,
          3.9,
        ],
        value: [
          84311,
          3391,
        ],
      },
      {
        name: '擴散廣度',
        pc: [
          54.5,
          45.5,
        ],
        value: [
          67,
          56,
        ],
      },
      {
        name: '互動強度',
        pc: [
          51,
          49,
        ],
        value: [
          31.3,
          30.1,
        ],
      },
      {
        name: '粉絲觸及力',
        pc: [
          79.3,
          20.7,
        ],
        value: [
          118901,
          31071,
        ],
      },
      {
        name: '社群互動力',
        pc: [
          94.1,
          5.9,
        ],
        value: [
          149251,
          9274,
        ],
      },
    ],
  },
}

export { districtData, competitionData }
