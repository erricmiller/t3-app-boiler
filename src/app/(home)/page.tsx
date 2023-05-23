import { NextPage } from 'next'
import Button from '~/components/ui/Button'

export const metadata = {
    title: "Home | Ecommerce Inside",
    description: "Ecommerce Inside is a full-service digital solutions agency based in USA specializing in branding designs, Software, Mobile Apps, Webs, & Marketing Solutions.",
  }

const Home:NextPage = () => {
  return (
    <div className='h-[200vh]'>
        <h1 className=''>h1 Heading</h1>
        <h2 className=''>h2 Heading</h2>
        <h3 className=''>h3 Heading</h3>
        <h4 className=''>h4 Heading</h4>
        <h5 className=''>h5 Heading</h5>
        <h6 className=''>h6 Heading</h6>
        <p className=''>Paragraph</p>
        <Button variant='Green'>Click Me</Button>
        <Button variant='Dark'>Click Me</Button>
        <Button variant='White'>Click Me</Button>
    </div>
  )
}

export default Home