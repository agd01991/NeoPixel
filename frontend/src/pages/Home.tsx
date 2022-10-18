import React from 'react'
import AddOrderMob from '../components/AddOrderMob'
import BannerMob from '../components/BannerMob'
import Events from '../components/Events'
import FooterMob from '../components/FooterMob'
import Gallery from '../components/Gallery'
import QA from '../components/QA'
import UsageSpheresMob from '../components/UsageSpheresMob'

export default function Home() {
  return (
    <div>
      <BannerMob />
      <UsageSpheresMob />
      {/* <Events />
      <Gallery/> */}
      <AddOrderMob/>
      {/* <QA/> */}
      <FooterMob/>
    </div>
  )
}
