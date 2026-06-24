import { motion, useScroll, useTransform } from 'framer-motion'
import type { ReactNode } from 'react'

type PageHeroVariant = 'menu' | 'order' | 'about' | 'contact'

interface PageHeroProps {
  variant: PageHeroVariant
  label: string
  title: string
  description?: string
  children?: ReactNode
}

const ease = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

function PageHero({ variant, label, title, description, children }: PageHeroProps) {
  const { scrollY } = useScroll()
  const blobY = useTransform(scrollY, [0, 500], [0, 80])
  const contentY = useTransform(scrollY, [0, 500], [0, 40])

  return (
    <section className={`page-hero page-hero--${variant}`}>
      <motion.div className="page-hero-blob" style={{ y: blobY }} aria-hidden="true" />
      <motion.div
        className="page-hero-content"
        style={{ y: contentY }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="section-header">
          <motion.p className="section-label" variants={item}>{label}</motion.p>
          <motion.h1 variants={item}>{title}</motion.h1>
          {description && <motion.p variants={item}>{description}</motion.p>}
        </div>
        {children && (
          <motion.div className="hero-actions" variants={item}>
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

export default PageHero
