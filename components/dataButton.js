export default function DataButton({ handleClick }) {
  return (
    <>
      <button className="py-2 px-6 rounded-lg bg-gray-500 text-gray-100" id="button" onClick={handleClick}>Submit</button>
    </>
  )
}
