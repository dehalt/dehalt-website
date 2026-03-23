'use client'

import { motion, useAnimationFrame, useMotionValue } from 'framer-motion'

export default function VerticalLoop({ images = [], reverse = false }) {
  const y = useMotionValue(0)

  const ITEM_HEIGHT = 300
  const GAP = 10

  // ✅ correct TOTAL (no extra gap at end)
  const TOTAL =
    ITEM_HEIGHT * images.length +
    GAP * (images.length - 1)

  useAnimationFrame((t, delta) => {
    const speed = 0.03

    let next = y.get() + (reverse ? delta * speed : -delta * speed)

    // ✅ seamless shift (NOT reset to 0)
    if (!reverse && next <= -TOTAL) {
      next += TOTAL
    }

    if (reverse && next >= 0) {
      next -= TOTAL
    }

    y.set(next)
  })

  return (
    <div
      style={{
        height: '900px',
        // backgroundColor:'black'
        // overflow: 'hidden', // 🔥 IMPORTANT (you commented it out, bad idea)
      }}
    >
      <motion.div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: `${GAP}px`,
          y,
        }}
      >
        {[...images, ...images].map((src, i) => (
          <img
            key={i}
            src={src}
            style={{
              height: `${ITEM_HEIGHT}px`,
              width: '100%',
              objectFit: 'cover',
              objectPosition:'center',
            //   aspectRatio:'1',
              borderRadius: '20px',
              display: 'block', // 🔥 prevents tiny layout gaps
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}