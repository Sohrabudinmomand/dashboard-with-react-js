// this line below will import the React library which is necessary for 
// writing react and also JSX to wirite HMTL within javascript
// and also importin useEffect hook from React to perform side effects
// side effects can include data fetching, subscriptions or changing the DOM 
// in React
import React, { useEffect } from 'react'

// the line below is used to link or rout the components of the project
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// importing the react icons FiSettings for settings icon
import { FiSettings } from 'react-icons/fi';

// i will use this tooltip to create and display ToolTips for React components
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// importing the tailwind css
import './App.css';



// later on i will give some comments
const App = () => {
    const activeMenu = true
    return (
        <div>
            <BrowserRouter>
                <div className='flex relative dark:bg-main-dark-bg'>
                    <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
                        <TooltipComponent content="Settings" position="Top">
                            <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                                style={{ background: "blue", borderRadius: "50%" }}>
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {/* working on sidebar menu starts here */}
                    {activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondry-dark-bg bg-white">
                            Sidebar
                        </div>
                    ) : (
                        <div clssName=" dark:bg-secondry-dark-bg">
                            Sidebar w-0
                        </div>
                    )}
                    {/* working on sidebar menu ends here */}

                    {/* working on navbar starts here */}
                    <div className={
                        `dark:bg-main-bg bg-mian-bg main-h-screen w-full ${activeMenu ? "md:ml-72" : "flex-2"}`
                    }>
                        <div className="fixed md:static bg-main-bg 
                        dark:bg-main-dark-bg navbar w-full">
                            Navbar
                        </div>
                    </div>
                    {/* working on navbar ends here */}

                    <div>
                        <Routes>
                            {/* To Dashboard */}
                            <Route path="/" element="E-commerce" />
                            <Route path="/ecommerce" element="E-commerce" />

                            {/* To Pages */}
                            <Route path="/orders" element="Orders" />
                            <Route path="/employees" element="Employees" />
                            <Route path="/customers" element="Customers" />

                            {/* Apps */}
                            <Route path="/kanban" element="Kanban" />
                            <Route path="/editor" element="Editor" />
                            <Route path="/calendar" element="Calendar" />
                            <Route path="/color-picker" element="ColorPicker" />


                            {/* Charts */}
                            <Route path="/line" element="Line" />
                            <Route path="/area" element="Area" />
                            <Route path="/bar" element="Bar" />
                            <Route path="/pie" element="Pie" />
                            <Route path="/financial" element="Financial" />
                            <Route path="/colo-mapping" element="ColorMapping" />
                            <Route path="/pyramid" element="Pyramid" />
                            <Route path="/stacked" element="Stacked" />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter >
        </div >
    )
}

export default App