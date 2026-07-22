import React from 'react'
import MarketingHeader from './ui/header'
import { SignupForm } from '../(auth)/ui/signup-form'

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <MarketingHeader />
        {/* <SignupForm/> */}
        <main>
            {children}
        </main>
    </div>
  )
}

export default MarketingLayout