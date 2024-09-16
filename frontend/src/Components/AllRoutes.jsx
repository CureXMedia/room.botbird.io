import { lazy,Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loading from './Loading.jsx'
import Navbar from'./Navbar.jsx'
import Footer from './Footer.jsx'
const MernStack = lazy(()=>import('./MernStack.jsx'))
const AboutUs = lazy(()=>import('./AboutUs.jsx'))
const DSA = lazy(()=>import('./DSA.jsx'))
const ComingSoon =  lazy (()=>import('./ComingSoon.jsx'))
const Home = lazy(()=> import('./Home.jsx'))
const Courses = lazy(()=> import('./Courses.jsx'))
const BlogSection = lazy(()=> import('./BlogSection.jsx'))
const NotFound = lazy(()=> import('./NotFound.jsx'))
const LandingWeekend = lazy(()=> import('./LandingWeekend.jsx'))
export default function AllRoutes() {
    return(
        <>
            <Navbar/>
            <div className="h-16"></div>
            <Suspense fallback={<Loading/>}>
                <Routes >
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<ComingSoon/>}/>
                    <Route path='/courses' element={<Courses/>}/>
                    <Route path='/blogs' element={<ComingSoon/>}/>
                    <Route path='/blog' element={<ComingSoon/>}/>
                    <Route path='/courses/mern-stack' element={<ComingSoon/>}/>
                    <Route path='/courses/dsa' element={<DSA/>}/>
                    <Route path='/coming-soon' element={<ComingSoon/>}/>
                    <Route path='/landing/weekend' element={<LandingWeekend/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </Suspense>
            <Footer/>
        </>
    )
}