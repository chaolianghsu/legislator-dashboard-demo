const genLineChartOption = ({ series, titleString = '選民總人數' }) => {
  const colors = ['#46BBFF', '#EA7500', '#641EFF', '#00AEAE', '#C9C9C9']
  const total = series[0].data.reduce((sum, d) => sum + d.y, 0)
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
    },
    colors,
    title: {
      text: `${total.toLocaleString()}<br><p/><p style="font-size:12px;">${titleString}</p>`,
      style: {
        color: '#829DB2',
        fontWeight: 'bold',
        fontSize: '24px',
      },
      align: 'center',
      verticalAlign: 'middle',
      y: 10,
    },
    plotOptions: {
      pie: {
        innerSize: '75%',
        dataLabels: {
          distance: 15,
          style: {
            textOutline: false,
            fontSize: 20,
            color: '#829DB2',
          },
          formatter() {
            return `<b>${Math.round((100 * this.y) / total)}%</b>`
          },
        },
        showInLegend: true,
      },
      series: {
        states: {
          inactive: {
            opacity: 1,
          },
        },
      },
    },
    tooltip: {
      formatter() {
        return `<b>${this.key}:</b> ${this.point.y.toLocaleString()}<p>人</p>`
      },
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    credits: {
      enabled: false,
    },
    series,
  }

  return options
}

export default genLineChartOption
