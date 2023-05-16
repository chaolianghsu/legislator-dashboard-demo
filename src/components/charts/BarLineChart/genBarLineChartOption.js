// eslint-disable-next-line max-len
// colors ['#8E9EE3', '#1BFBE4', '#FD8373', '#8b0707', '#8B46BD', '#aaaa11', '#22aa99', '#853785', '#66aa00', '#8A7F7D', '#d24675', '#D38A1B', '#42A881', '#D98179', '#008972']

// categories = xAxis of names
const genBarLineChartOption = ({ categories = ['cate1', 'cate2', 'cate3'], lineData = [1, 2, 3], barData = [3, 2, 1] }) => ({
  title: '',
  chart: {
    scrollablePlotArea: {
      minWidth: 600,
      scrollPositionX: 1,
    },
  },
  xAxis: {
    categories,
    crosshair: true,
  },
  yAxis: [
    {
      title: {
        text: '滿意度',
        x: -12,
      },
      labels: {
        format: '{value}%',
      },
    },
    {
      opposite: true,
      title: {
        style: {
          color: '#46BBFF',
        },
        text: '聲量',
        x: 8,
      },
      min: 0,
      labels: {
        style: {
          color: '#46BBFF',
        },
        format: '{value}',
      },
    },
  ],
  credits: {
    enabled: false,
  },
  series: [
    {
      name: '聲量',
      type: 'column',
      yAxis: 1,
      tooltip: {
        valueSuffix: '筆',
      },
      data: barData,
      // bar color
      color: '#46BBFF',
    },
    {
      name: '滿意度',
      type: 'spline',
      tooltip: {
        valueSuffix: '%',
      },
      data: lineData,
      // line color
      color: '#75797c',
    },
  ],
})

export default genBarLineChartOption
