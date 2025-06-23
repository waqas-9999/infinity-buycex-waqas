import DevelopRewardsSection from '../components/Home/DevelopRewards'
import HeroSection from '../components/Home/Hero'
import RealtimeDataSection from '../components/Home/RealtimeData'
import Section1 from '../components/Home/DesignedFor'
import UpdatesSection from '../components/Home/UpdateSection'
import BuyBcx from '../components/Home/BuyBcx'

function Home() {
  return (
    <div>
      <HeroSection/>
      <Section1 />
      <RealtimeDataSection />
      <DevelopRewardsSection/>
      <BuyBcx/>
      <UpdatesSection/>
    </div>
  )
}

export default Home