import React from 'react'
import MarketingHeader from '../(marketing)/ui/header'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
      <div>
        <MarketingHeader />
        <main>{children}</main>
      </div>
  )
}

export default DashboardLayout
