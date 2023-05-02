import MyButton from './MyButton'
import MyBlackButton from './MyBlackButton'

function Header() {
  return (
    // header
    <div className='flex justify-between items-center mx-[200px] h-[80px] bg-white'>
      <h1 className='text-xl font-bold'>kerja-IT.com</h1>
      <div className='space-x-2'>
        <MyButton text='🏹 Talents' />
        <MyButton text='📢 Post Jobs' />
        <MyBlackButton text='👋 Aiman' />
      </div>
    </div>
  )
}

export default Header
