'use client'
import About from './components/About'
import { Stack } from '@mui/material'

export default function page() {
  return (
    <Stack flexGrow={1}>
      <About/>
    </Stack>
  )
}
