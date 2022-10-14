import React from 'react'
import AddOrder from '../components/AddOrder'
import Banner from '../components/Banner'
import Events from '../components/Events'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import QA from '../components/QA'
import UsageSpheres from '../components/UsageSpheres'

export default function Home() {
  return (
    <div>
      <Banner />
      <UsageSpheres />
      <Events />
      <Gallery/>
      <AddOrder/>
      <QA/>
      <Footer/>
    </div>
  )
}
