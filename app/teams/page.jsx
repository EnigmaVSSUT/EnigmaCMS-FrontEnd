'use client'
import { Stack } from '@mui/material'
import Teams from './components/Teams'

export default function page() {
  return (
    <Stack flexGrow={1}>
      <Teams />
    </Stack>
  )
}
