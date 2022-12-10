import Head from 'next/head'
import Image from 'next/image'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {
  return (
    <div>
      <main className='bg-gray-600 grid justify-center'>
        <div className='py-10 px-5'>
          <Card className='grid sm:grid-cols-3 gap-4' sx={{ maxWidth: 800 }}>
            <div className='col-span-2 ...'>
            <CardMedia
                component="img"
                height="140"
                image="/images/portrait.jpg"
                alt="green iguana"
              />
            </div>
            <div>
            <CardContent className='text-center align-middle'>
                <Typography gutterBottom variant="h5" component="div">
                  <p className='text-lg'>Josh Jenkin</p> 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                A musician at heart, my love for electronic music and electronics in general has brought me to the precipice of Software Development.<br /><br />

                Information seeking, dedicated, eager to learn, just a few things that define Josh Jenkin. I am here to improve; myself, your business, your products. With a firm grasp on Front End Development, I would be an asset to any company. With my extensive Managerial and customer service knowledge, my skills easily translate to create the best customer UI imaginable.<br /><br />

                Click the links of my Portfolio to find out more about the work I have done and more about me!<br /><br />
                </Typography>
                <ul className='flex justify-evenly'>
                  <li>
                  <a //eslint-disable-line
                  href="https://www.linkedin.com/in/josh-jenkin-7065a993/" 
                  target="_blank"
                  ><LinkedInIcon /></a>
                  </li>
                  <li>
                  <a href="mailto:josh.jenkin@live.com"><EmailIcon /></a>
                  </li>
                  <li>
                  <a //eslint-disable-line
                  href="https://github.com/jjenks713" 
                  target="_blank"
                  ><GitHubIcon /></a>
                  </li>
                </ul>
              </CardContent>
            </div>
          </Card>
        </div>

      </main>
    </div>
  )
}
