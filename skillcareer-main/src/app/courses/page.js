
import CoursesPageContent from "@/components/CoursesPageContent"
import Footer from "@/components/Footer"
import Header from "@/components/header"





export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <CoursesPageContent/>
      </main>
       <Footer /> 
    </div>
  )
}

