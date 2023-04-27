import MyButton from './MyButton'

function Subheader() {
  return (
    // subheader
    <div className='flex justify-between items-center h-[80px] bg-blue-700'>
      <p className='text-white mx-[200px]'>
        🚨 Your profile is invisible – employers can't find you.
      </p>
      <div className='mx-[200px]'>
        <MyButton text='Edit My Profile' />
      </div>
    </div>
  )
}

export default Subheader
