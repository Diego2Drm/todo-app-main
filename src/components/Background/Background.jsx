import backgrounLight from '../../assets/images/bg-mobile-light.jpg'
import backgroundDark from '../../assets/images/bg-mobile-dark.jpg'

function Background({ children,changeTheme }) {

  

  return (
    <>
      <div className='w-full h-52 relative z-0'>
        {
          changeTheme ?
            <img src={backgroundDark} alt="Bacakground Dark" className='w-full h-full' /> :
            <img src={backgrounLight} alt="Bacakground Light" className='w-full h-full' />
        }
      </div>
      {children}
    </>
  );
};

export { Background };