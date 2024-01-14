import { useEffect, useState } from 'react'

export const useScreenWidth = (screen = 700) => {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(true)
  const check =
    typeof window !== 'undefined' ? window?.innerWidth < screen : undefined

  useEffect(() => {
    setIsMobile(() => {
      setIsLoading(false)
      return check
    })
  }, [setIsMobile, screen, check])

  return { isMobile, isLoading }
}
