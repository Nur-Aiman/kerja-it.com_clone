import { useParams } from 'react-router-dom'
import JobData from '../assets/job-directory-data.json'
import Subheader from '../components/Subheader'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

function Job() {
  const param = useParams()

  const navigate = useNavigate()

  const goToJobs = () => {
    navigate('/kerja-it.com_clone/')
  }

  const goToJobDetails = () => {
    navigate(`/kerja-it.com_clone/job/${filteredJob.id}`)
  }

  // Create a function to filter element in JobData which id === param.id, return an object
  const filteredArray = JobData.filter((item) => String(item.id) === param.id)
  const [filteredJob] = filteredArray
  console.log(filteredJob)

  const handleApplyNow = () => {
    window.open(filteredJob.link, '_blank')
  }

  return (
    <div>
      <Header />
      <Subheader />
      <div className='flex justify-center '>
        <div className=' w-2/5 space-y-4 py-4'>
          <div>
            <span
              className='text-black hover:text-blue-800 cursor-pointer'
              onClick={goToJobs}
            >
              Jobs
            </span>
            <span> / </span>
            <span
              className='text-black hover:text-blue-800 cursor-pointer'
              onClick={goToJobDetails}
            >
              {filteredJob.job} - {filteredJob.company}
            </span>
          </div>

          <div className='border rounded-md px-10 py-10'>
            <div className='space-x-1'>
              {filteredJob.stacks.map((stack, index) => (
                <p
                  key={index}
                  className='bg-gray-200 py-1 px-2 inline-block rounded'
                >
                  {stack}
                </p>
              ))}
            </div>
            <h1
              className='font-medium inline-block py-4'
              style={{ fontSize: '30px', lineHeight: '36px' }}
            >
              {filteredJob.job}
            </h1>
            <h2 className=''>{filteredJob.company}</h2>
            <div className=' py-4'>
              <p>🗓 Posted on {filteredJob.post_date}</p>
              <p>📍{filteredJob.district} </p>
              <p>💼 {filteredJob.work_type}</p>
              <p> Unspecified</p>
            </div>
            <button
              className='bg-blue-600 text-white px-4 py-2 rounded-md'
              onClick={handleApplyNow}
            >
              Apply Now 🚀
            </button>
            <div></div>
            <h2 className='text-xl font-medium py-4'>✍️ Job Description</h2>
            <ul className='list-disc list-inside py-2'>
              {filteredJob.details.job_description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
            <h2 className='text-xl font-medium py-4 '>Qualifications</h2>
            <ul className='list-disc list-inside py-2'>
              {filteredJob.details.qualification.map((qual, index) => (
                <li key={index}>{qual}</li>
              ))}
            </ul>
            <button
              className='bg-blue-600 text-white px-4 py-2 rounded-md'
              onClick={handleApplyNow}
            >
              Apply Now 🚀
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Job
