import { Stack,Typography } from '@mui/material'

export default function Error() {
  return (
    <Stack minHeight={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <Stack direction={'row'} gap={1}  justifyContent={'center'} alignItems={'center'}>
        <img src="/assets/ded.png"
        style={{
            width: '140px',
            height: '110px'
        }}
        alt="dead" />
        <Typography variant='h3'>Something went wrong...</Typography>
      </Stack>
    </Stack>
  )
}
