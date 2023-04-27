function MyButton(props: any) {
  return (
    <button className='p-4 hover:border rounded-md bg-white'>
      {props.text}
    </button>
  )
}

export default MyButton
