import React, { useLayoutEffect } from 'react'
import Test from './pages/test'
import { Route, Routes, NavLink } from 'react-router-dom'
import Test2 from './pages/test2'
import ChildeComp from './pages/childeComp'
export default function Layout() {
  useLayoutEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(res => res.json())
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err))


  }, [])

  return (
    <div>
      main layout
      <nav>
        <NavLink to="test2">test2</NavLink>
        <NavLink to="test">test</NavLink>
      </nav>
      <Routes>

        <Route path='test2' element={<Test2 />} >
          <Route index={true} element={Test2} />
          <Route path='childe' element={<ChildeComp />} />
          <Route path='childe2' element={<Test />} />
        </Route>
      </Routes>
    </div>
  )
}
