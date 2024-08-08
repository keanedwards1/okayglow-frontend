import Layout from '../components/Layout'
import HomeHero from '../components/HomeHero'
/* import HomeFeatures from '../components/HomeFeatures'
import HomeReviews from '../components/HomeReviews'
import HomePress from '../components/HomePress'
import HomeSustainability from '../components/HomeSustainability' */

export default function Home() {
  return (
    <Layout title="Okay Glow | Find Your Perfect Glow" description="Your personalized skincare solution">
     <HomeHero />{/*  
      <div className="text-center my-8">Cool words - Cool words - Cool words - Cool words</div>
      <HomeFeatures />
      <section className="bg-gray-200 p-4 my-8">
        Cool Image with some writing and info
      </section>
      <HomeReviews />
      <HomePress />
      <div className="text-center my-8">Cool element - cool element - cool element - cool element</div>
      <HomeSustainability /> */}
    </Layout>
  )
}