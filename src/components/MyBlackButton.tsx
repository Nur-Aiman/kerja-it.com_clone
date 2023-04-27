function MyBlackButton(props: any) {
  return (
    <button className='p-4 hover:border rounded-md bg-black text-white'>
      {props.text}
    </button>
  )
}

export default MyBlackButton
