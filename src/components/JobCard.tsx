import { useNavigate } from 'react-router-dom'

interface Job {
  id: number
  job: string
  company: string
  post_date: string
  company_state: string
  work_type: string
  stacks: string[]
}

interface JobCardProps {
  job: Job
}

function JobCard({ job }: JobCardProps) {
  // Function to detect if the year is 2023, isNew === true
  const date = new Date(job.post_date)
  const isNew = date.getFullYear() === 2023
  console.log(isNew)

  const navigate = useNavigate()

  return (
    <div
      onClick={() => {
        console.log(job.id)
        navigate(`/job/${job.id}`)
      }}
      className='border p-4 rounded-md w-[450px] space-y-4 cursor-pointer'
    >
      <div>
        <h4 className='text-xl font-medium inline-block'>{job.job}</h4>
        {isNew ? (
          <span className='bg-green-300 inline-block px-1 text-sm text-gray-700 ml-2 rounded-sm'>
            New
          </span>
        ) : null}
        <p>{job.company}</p>
      </div>
      <div>
        <p>🗓 Posted on {new Date(job.post_date).toLocaleDateString()}</p>
        <p>📍 {job.company_state}</p>
        <p className='capitalize'>💼 {job.work_type}</p>
      </div>
      <div className='space-x-1'>
        {job.stacks.map((stack, index) => (
          <p key={index} className='bg-gray-200 py-1 px-2 inline-block rounded'>
            {stack}
          </p>
        ))}
      </div>
      <p>Added on {new Date(job.post_date).toLocaleDateString()}</p>
    </div>
  )
}

export default JobCard
