import React from 'react'
import AddOrderMob from '../components/AddOrderMob'
import BannerMob from '../components/BannerMob'

import FooterMob from '../components/FooterMob'

import UsageSpheresMob from '../components/UsageSpheresMob'

export default function Home() {
  return (
    <div>
      <BannerMob />
      <UsageSpheresMob />

      <AddOrderMob/>

      <FooterMob/>
    </div>
  )
}
