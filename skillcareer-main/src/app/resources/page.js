

import Footer from "@/components/Footer"
import Header from "@/components/header"
import ResourcesPage from "@/components/ResourcesPage"






export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
       {/* <ResourcesPage/> */}
      </main>
       <Footer /> 
    </div>
  )
}

