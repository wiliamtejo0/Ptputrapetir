'use client'

import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      
      if (anchor) {
        e.preventDefault()
        const targetId = anchor.getAttribute('href')
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId)
          if (targetElement) {
            const headerHeight = 80
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            })
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return null
}