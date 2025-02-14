import iconSun from '../../assets/images/icon-sun.svg'
import iconMoon from '../../assets/images/icon-moon.svg'

function Title({ changeTheme, handleChange }) {
  return (
    <div className='w-full flex justify-between items-center'>
      <h1 className='text-white text-3xl uppercase font-josefin font-bold tracking-[1rem]'>Todo</h1>
      <button onClick={handleChange}
      >
        {
          changeTheme == "light" ?
            <img src={iconMoon} alt="icon-moon" /> :
            <img src={iconSun} alt="icon-sun" />
        }
      </button>
    </div>
  )
};

export { Title };