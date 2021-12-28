import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Mainnavigation } from './Mainnavigation'
// import MainNavigations from './MainNavigations'

export const Layout = (props) => {
    return (
        <div>
            <BrowserRouter>
            <Mainnavigation/>
            {/* <MainNavigations/> */}
            <main>
                {props.children}
            </main>
            </BrowserRouter>
        </div>
    )
}
