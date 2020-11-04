import React from 'react'
import { OptimizeService } from './OptimizeService'

export const useOptimize = (experimentID, reserveVariant = 1) => {
  const [variant, setVariant] = React.useState(null)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    const getVariant = async () => {
      try {
        const value = await OptimizeService.getVariant(experimentID)
        if (value === undefined) {
          setVariant(reserveVariant)
        } else {
          setVariant(value)
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(`${e} (experimentID: ${experimentID})`)
        setError(e)
        setVariant(reserveVariant)
      }
    }

    getVariant()
  }, [experimentID, reserveVariant])

  return { variant, error }
}

export default useOptimize
