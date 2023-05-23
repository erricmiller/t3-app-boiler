import { NextPage } from 'next'

export const metadata = {
    title: "Home | Ecommerce Inside",
    description: "Ecommerce Inside is a full-service digital solutions agency based in USA specializing in branding designs, Software, Mobile Apps, Webs, & Marketing Solutions.",
  }

const Home:NextPage = () => {
  return (
    <div className='h-[200vh]'>
        <h1 className='text-h1'>Not Poppins</h1>
    </div>
  )
}

export default Home