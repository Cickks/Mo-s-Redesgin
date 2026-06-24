import type { ReactNode } from 'react'
import Footer from './Footer.tsx'

interface PageLayoutProps {
  children: ReactNode
}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="page-layout">
      {children}
      <Footer />
    </div>
  )
}

export default PageLayout
