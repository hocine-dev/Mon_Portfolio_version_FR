import React from 'react'

const Layout = ({children,className}) => {
  return (
    <div className={`w-full h-full block z-0 bg-light p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 dark:bg-dark overflow-x-hidden ${className}`}>
      {children}
    </div>
  )
}

export default Layout