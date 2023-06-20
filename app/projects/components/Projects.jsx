import AnimatePage from '@/layout/AnimatePage'
import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function Projects() {
  return (
    <AnimatePage>
      <Stack
				padding='32px'
			>
				<Typography
					variant='h1'
				>
					Projects
				</Typography>
			</Stack>
    </AnimatePage>
  )
}
