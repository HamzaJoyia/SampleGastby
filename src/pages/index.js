import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import Banner from "../components/banner"
import AboutSection from "../components/aboutSection"
import Footer from "../components/footer"
import ServiceSection from "../components/serviceSection"


const Index = () => {
  return (
    <div>
    <SEO title="Home" />
    <div>
      <Header/>
      <Banner />
      <AboutSection/>
      {/* <ServiceSection/> */}
      {/* <Footer/> */}
    </div>
 </div>
  )
}

export default Index
