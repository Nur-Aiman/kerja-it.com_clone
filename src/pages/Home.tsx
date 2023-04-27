import JobCard from '../components/JobCard'
import MyBlackButton from '../components/MyBlackButton'
import MyButton from '../components/MyButton'
import JobData from '../assets/job-directory-data.json'
import Header from '../components/Header'
import Subheader from '../components/Subheader'
import Footer from '../components/Footer'

function Home() {
  // every react function must return a TSX'
  console.log(JobData)
  return (
    <div>
      <Header />
      <Subheader />

      <div className='flex justify-center items-center mx-[200px] h-[80px]'>
        <h1 className='text-[36px] font-bold'>Find Tech Jobs In Malaysia MY</h1>
      </div>

      <div className='flex justify-center items-center mx-[200px] h-[80px]'>
        <h1 className='text-[16px]'>
          Let employers find you. Or apply companies directly
        </h1>
      </div>

      <div>
        <div className='flex justify-center items-center space-x-2 my-4'>
          <MyBlackButton text='🎯 I want companies to find me' />
          <MyButton text='🔍 Search Jobs' />
        </div>
      </div>
      {/* Job listing */}

      <div className='flex justify-center items-center flex-wrap gap-4 mx-[600px]'>
        {/* Job card */}
        {JobData.map((job) => {
          return <JobCard key={job.id} job={job} />
        })}
      </div>
      <Footer />
    </div>
  )
}

export default Home
