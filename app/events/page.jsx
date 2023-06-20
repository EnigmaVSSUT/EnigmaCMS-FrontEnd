'use client'
import Event from './components/Event'
import { Stack } from '@mui/material'

export default function page() {
  return (
    <Stack flexGrow={1}>
      <Event/>
    </Stack>
  )
}
