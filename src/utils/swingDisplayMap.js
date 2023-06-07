const swingDisplayMap = (value) => {
  if (value === 0) return '不搖擺'
  if (value > 0 <= 33) return '輕度搖擺'
  if (value > 33 <= 66) return '中度搖擺'
  return '重度搖擺'
}

export default swingDisplayMap
