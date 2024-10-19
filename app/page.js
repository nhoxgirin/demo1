/*
import HomePage from '@/src/containers/home/HomePage'
import React from 'react'
//rfce
function page(){
	return {<HomePage />}
}
export default page
*/
import React from 'react'
import '@/public/css/style.css';

import HomePages from '@/src/containers/home/HomePages'
import Banner from '@/src/containers/home/Banner'
import Header from '@/src/Components/layout/Header'

function page(){
	const menu=[
	{name:"home",url:"/"},
	{name:"home2",url:"/"},
	{name:"search",url:"/"}
	]
	const companyName="tiki"
	return (
	<div className="text-white">
	<HomePages/>
	<Header companyName={companyName} menu={menu}/>
	<Banner/>
	{/*<Banner/><Intro/>*/}
	</div>
	)
}
export default page