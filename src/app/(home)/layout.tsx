import { type } from 'os'
import React from 'react'
import Header from '~/components/Header/Header'


const HomeLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <main>
        <Header />
        {children}
    </main>
  )
}

export default HomeLayout