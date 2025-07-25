import { Link } from "react-router-dom"


const Header = ({setRating,cart}) => {
  return (
    <div className='fixed top-0 left-0 w-full flex justify-evenly h-12 items-center bg-slate-800 text-white '>
      <select className='text-black' onChange={(e) => setRating(e.target.value)}>
        <option value={4.0}>4.0</option>
        <option value={4.3}>4.3</option>
        <option value={4.5}>4.5</option>
        <option value={4.7}>4.7</option>
        <option value={4.9}>4.9</option>
      </select>
      <Link to="/DishList"><p>Items Added:{cart}</p></Link>
    </div>
  )
}

export default Header