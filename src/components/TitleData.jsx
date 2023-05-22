import PropTypes from 'prop-types'
import { Stack, Typography } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export const descriptionConfigs = {
  聲譽值: '綜合評量網路聲量與好感度，數值越高代表聲譽越佳。',
  熱門文章: '熱門文章為討論較多的文章，依據回文數排序。',
  網路聲量: '網路上提及自己討論數，筆數越多表示討論度越高。',
  好感度: '網路上的好感程度，正評越多且負評越少，好感度越高。',
  擴散廣度: '相關新聞出現的頻道數量，數值越高表示新聞擴散越廣。',
  互動強度: '在社群、討論區、部落格中，平均每篇文章有多少留言數，數值越高表示互動強度越高。',
  粉絲觸及力: '估計粉專經常互動的人數。',
  社群互動力: '按讚數、留言數及分享數的加總，數值越高表示互動程度越高。',
  平均互動力: '平均每位經常互動者會有多少互動數。',
  政策討論度: '近三個月該選區在各項公共議題的網路聲量及網路好感程度。',
  異色搖擺選票: '扣除各競爭政黨的鐵票後，剩餘的選票。',
  歷史搖擺程度: '過去四屆該縣市轉投不同政黨的機率。',
  預估投票人數: '該選區20歲以上人數乘以過去四屆平均投票率。',
  上屆選舉人數: '該選區上屆選舉20歲以上人數。',
  平均投票率: '該選區過去四屆平均投票率。',
  同色搖擺選票: '最高得票數扣除最低得票數，尚可努力爭取之選票數。',
  政黨最低得票數: '政黨在四次選舉中的最低獲得選票數。,',
  政黨優勢: '在這個地區平均比其他黨多拿到的選票。',
  心佔率: '所有相關候選人的網路聲量中提及自己的佔比，百分比越高表示被提及的次數越多。',
  選區競爭: '自己與競爭對手在各項指標的優劣勢情形。',
  選民輪廓: '該選區選民的各項人口統計資料。',
  歷史模型: '過去4屆立委選舉結果。',
  // Should be changed later
  關鍵領袖: '社群媒體上提及候選人的領袖名單。',
}

function TitleData({
  title, value = 8810, markNumber, unit = '', TitleStackProps, customValue, valueTypographyProps = {},
}) {
  // 單位
  const unitTypesMap = {
    percentage: (
      <Typography
        sx={{
          color: markNumber >= 0 ? 'customRed.dark' : 'customGreen.main',
          display: 'flex',
          alignItems: 'center',
          fontSize: '1.4rem',
        }}
      >
        {markNumber >= 0 ? (
          <KeyboardArrowUpIcon />
        ) : (
          <KeyboardArrowDownIcon />
        )}
        {' '}
        {markNumber}
        %
      </Typography>),
    channels: <Typography sx={{ marginLeft: '1rem' }}>頻道數</Typography>,
    piece: <Typography sx={{ marginLeft: '1rem' }}>則</Typography>,
    people: <Typography sx={{ marginLeft: '1rem' }}>人</Typography>,
    ticket: <Typography sx={{ marginLeft: '1rem' }}>票</Typography>,
  }

  return (
    <Stack spacing={1}>
      <Stack direction="row" spacing={2} alignItems="end" {...TitleStackProps}>
        <Typography
          variant="h4"
          sx={{
            color: 'customGray.main',
            fontSize: '2rem',
          }}
        >
          {title}
        </Typography>
        {customValue ?? (
        <>
          <Typography
            variant="h4"
            {...valueTypographyProps}
            sx={{
              color: 'customPurple.main',
              fontSize: '3rem',
              ...(valueTypographyProps?.sx || {}),
            }}
          >
            {value}
          </Typography>
          {unitTypesMap[unit]}
        </>
        )}

      </Stack>
      <Typography variant="body1" sx={{ color: 'customGray.light', fontSize: '1.5rem' }}>
        {descriptionConfigs[title]}
      </Typography>
    </Stack>
  )
}

TitleData.propTypes = {
  markNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  unit: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  TitleStackProps: PropTypes.shape({}),
  customValue: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  valueTypographyProps: PropTypes.node,
}

export default TitleData
