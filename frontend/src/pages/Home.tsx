import Banner from '../components/Banner'
import UsageSpheres from '../components/UsageSpheres'
import AddOrder from '../components/AddOrder'
import QA from '../components/QA'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
      <Banner/>
      <UsageSpheres/>

      <AddOrder/>
      <QA/>

      <Footer/>
    </div>
  )
}
