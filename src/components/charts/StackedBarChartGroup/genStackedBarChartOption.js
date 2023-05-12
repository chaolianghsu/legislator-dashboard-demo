const genStackedBarChartOption = ({ series }) => ({
  chart: {
    type: 'bar',
    height: 100,
    backgroundColor: 'transparent',
  },
  title: {
    text: '',
  },
  xAxis: {
    visible: false,
  },
  yAxis: {
    title: {
      text: '',
    },
    max: 100,
    visible: false,
  },
  legend: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    series: {
      stacking: 'normal',
      dataLabels: {
        enabled: false,
      },
    },
  },
  series,
  lang: {
    numericSymbols: null,
    thousandsSep: ',',
  },
  tooltip: {
    enabled: false,
  },
})

export default genStackedBarChartOption
