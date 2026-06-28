'use client'
import { useEffect } from 'react'

export default function ErrorBoundary({ error }: { error: Error }) {
  useEffect(() => {
    // Log error client-side if necessário
  }, [error])
  return null
}
