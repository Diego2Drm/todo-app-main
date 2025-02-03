import iconCross from '../../assets/images/icon-cross.svg'
import iconCheck from '../../assets/images/icon-check.svg'

function Todos({ isCompleted, handleCompleted }) {
  return (
    <section className='bg-Very-Dark-Desaturated-Blue mt-5 rounded-md overflow-hidden'>
      <div className='flex border-b-2 border-Very-Dark-Grayish-Blue2 p-2 items-center justify-between px-5'>

        <div className='flex items-center gap-3 p-1'>

          <div className={`${isCompleted ?
            'bg-gradient-to-r from-Check-Background1 to-Check-Background2' :
            'bg-Very-Dark-Desaturated-Blue border-2 border-Very-Dark-Grayish-Blue2'} 
          w-5 h-5 flex justify-center items-center rounded-full`}
            onClick={handleCompleted}
          >

            {
              isCompleted && <img src={iconCheck} alt="icon-check" className='icon-Check' />
            }

          </div>

          <p className={`${isCompleted ?
            'text-Very-Dark-Grayish-Blue2 line-through' :
            'text-Light-Grayish-Blue'
            } text-sm`}
            onClick={handleCompleted}
          >
            Hello Word!!!
          </p>

        </div>

        <img src={iconCross} alt="icon-croos" />
      </div>

      <div className='flex justify-between px-5 py-4'>
        <p className='text-sm text-Very-Dark-Grayish-Blue2 font-semibold p-1'>5 items left</p>
        <button className='text-sm text-Very-Dark-Grayish-Blue2'>
          Clear Completed
        </button>
      </div>

    </section>
  );
};

export { Todos };