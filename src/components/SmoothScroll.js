'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

export default function SmoothScroll({ children }) {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.05,
            wheelMultiplier: 0.7,
            smoothWheel: true,
            smoothTouch: false,
        })

        let rafId

        function raf(time) {
            lenis.raf(time)
            rafId = requestAnimationFrame(raf)
        }

        rafId = requestAnimationFrame(raf)

        return () => {
            cancelAnimationFrame(rafId)
            lenis.destroy()
        }
    }, [])

    return <>{children}</>
}