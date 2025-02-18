import backgrounLight from '../../assets/images/bg-mobile-light.jpg'
import backgroundDark from '../../assets/images/bg-mobile-dark.jpg'
import backgroundLightDesktop from '../../assets/images/bg-desktop-light.jpg'
import backgroundDarkDesktop from '../../assets/images/bg-desktop-dark.jpg'

function Background({ children, changeTheme }) {

  return (
    <>
      <div className='w-full h-52 relative z-0 md:h-56'>
        {
          changeTheme == "light" ?
            <>
              <img src={backgrounLight} alt="Background Light" className='w-full h-full md:hidden' />
              <img src={backgroundLightDesktop} alt='Background Light Desktop' className='hidden md:flex h-full w-full' />
            </>
            :
            <>
              <img src={backgroundDark} alt="Bacakground Dark" className='w-full h-full md:hidden' />
              <img src={backgroundDarkDesktop} alt="Background Dark Desktop" className='hidden md:flex h-full w-full' />
            </>
        }
      </div>
      {children}
    </>
  );
};

export { Background };