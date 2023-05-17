const downloadFile = ({ blob, name = 'file', type = 'xlsx' }) => {
  const href = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = href
  link.setAttribute('download', `${name}.${type}`)
  document.body.appendChild(link)
  link.click()

  // clean up
  document.body.removeChild(link)
  URL.revokeObjectURL(href)
}

export default downloadFile
