// import React, { useEffect } from 'react'
// import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'
// import MyRoutes from '../routes'
// import { Provider } from 'react-redux'
// import { todoStore } from './redux/stroe'
// const App = () => {
//   return (
//     <Provider store={todoStore}>
//       <Router>
//         <Switch>
//           {/* v5 */}
//           {MyRoutes.map((item) => (
//             <Route key={item.key} path={item.path} component={item.component} exact />
//           ))}
//           <Redirect from="*" to={'/'} />
//         </Switch>
//       </Router>
//     </Provider>
//   )
// }
// export default App

// goodlive

import React, { useEffect, useState } from 'react'
import BottomNav from './component/footnav'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/stroe'

import IOuters from '../routes'
import Layout from './component/Layout'
// import Bdd from './pages/bdd'
import './utils/init'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            {IOuters.filter(
              (item) =>
                item.key == 'city' ||
                item.key === 'search' ||
                item.key == 'login' ||
                item.key == 'details',
            ).map((item) => (
              <Route key={item.key} exact path={item.path} component={item.component}></Route>
            ))}
            <Layout path="/">
              <Switch>
                {IOuters.filter((item) => item.path !== '/city').map((item) => (
                  <Route key={item.key} exact path={item.path} component={item.component}></Route>
                ))}
                <Redirect from="*" to={'/'} />
              </Switch>
              <BottomNav />
            </Layout>
            {/* <Route exact path={'/bdd'} component={Bdd}></Route> */}
            <Redirect from="*" to={'/'} />
          </Switch>
        </Router>
      </Provider>
    </>
  )
}
export default App
