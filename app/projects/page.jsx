'use client'
import Projects from './components/Projects'
import { Stack } from '@mui/material'

export default function page() {
  return (
    <Stack flexGrow={1}>
      <Projects/>
    </Stack>
  )
}
