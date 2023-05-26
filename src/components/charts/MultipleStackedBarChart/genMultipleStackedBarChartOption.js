import Highcharts from 'highcharts'

const genMultipleStackedBarChartOption = ({
  categories,
  series,
  chartOptionOverrides = {},
}) => ({
  chart: {
    type: 'bar',
    height: 900,
  },
  title: {
    text: '',
  },
  xAxis: {
    type: 'category',
    title: {
      text: '',
    },
    labels: {
      style: {
        fontSize: '13px',
      },
    },
    categories,
    min: 0,
    tickLength: 5,
  },
  yAxis: {
    title: {
      text: '',
    },
  },
  legend: {
    symbolWidth: 10,
    symbolHeight: 10,
    symbolRadius: 3,
  },
  tooltip: {
    useHTML: true,
    headerFormat: '<small>{point.key}</small><table>',
    valueDecimals: 0,
    formatter() {
      return `<small>${this.key}</small><table>:<br/>${
        this.series.name
      } : ${Highcharts.numberFormat(this.y, 0, '.', ',')}` // Format the value with a thousand separator
    },
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    series: {
      stacking: 'normal',
    },
  },
  series,
  ...chartOptionOverrides,
})

export default genMultipleStackedBarChartOption
