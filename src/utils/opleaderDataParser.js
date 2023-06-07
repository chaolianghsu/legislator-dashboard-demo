const chartConfigMap = {
  被按讚次數: {
    color: '#00AEAE',
    legendIndex: 2,
  },
  被回文數: {
    color: 'rgb(142, 158, 227)',
    legendIndex: 1,
  },
  發表次數: {
    color: 'rgb(100, 177, 228)',
    legendIndex: 0,
  },
}

const opleaderCategoriesParser = (categories) => categories.map((c) => {
  const [platform, channel] = c.split(' -- ')
  return `${channel} (${platform})`
})

const opleaderSeriesParser = (series) => series.map(((d) => ({
  ...d,
  ...chartConfigMap[d.name],
})))

export { opleaderCategoriesParser, opleaderSeriesParser }
