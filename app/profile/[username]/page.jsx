'use client'
import { Stack } from '@mui/material'
import Profile from './components/profile'

export default function page() {
    return (
        <Stack flexGrow={1}>
        <Profile/>
        </Stack>
    )
    }