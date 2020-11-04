import React from 'react'
import { useOptimize } from '../Optimize'

const TestOptimize = ({ className }) => {
  const { variant, error } = useOptimize('WKo1YMmqRKaaNguuqTLdpA', 1)

  if (variant === null) {
    return <div className={className}>Loading...</div>
  }

  if (error) {
    return <div className={className}>Error: {error.toString()}</div>
  }

  return <div className={className}>{variant}</div>
}

export default TestOptimize
