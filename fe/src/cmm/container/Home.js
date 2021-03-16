import React, {useState} from 'react'
import { Route } from 'react-router'
import Counter from './Counter'
import Login from './sec/container/Login'
import SignUp from './uss/container/SignUp'

const Home = () => {

    return(<>
    <div style={{width:200, margin: "0 auto"}}>home</div>
    <Route path='/' component={Home} exact/>
    <Route path='./Counter' component={Counter}>카운터</Route>
    <Route path='./Login' component={Login}>로그인</Route>
    <Route path='./SignUp' component={SignUp}>SignUp</Route>
    </>)
}
export default Home
