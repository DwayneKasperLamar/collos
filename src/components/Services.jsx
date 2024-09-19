import section from './Section'
import Heading from './Heading'
import { check, service1 } from '../assets'
import { brainwaveServices, brainwaveServicesIcons } from '../constants'



const Services = () => {
  return (
    <section  id='how-to-use'>
        <div className='container'>
            <Heading 
            title='Innovative User Experience '
            text='Not the regular frame this is Oncollos'/>
        </div>

        <div className='relative'>
            <div className='relative  z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]'>
                <div className='absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto'>
                    <img className='w-full h-full object-cover md:object-right'
                    width={880}
                    height={730}
                    alt='wooden Frame'
                    src={service1}
                    />
                </div>
                    <div className='relative z-1 max-w-[17rem] ml-auto'>
                        <h4 className='h-4 mb-4'>Smart Frame</h4>
                        <p className='body-2 mb-[3rem] text-n-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore at eaque placeat provident corporis ipsa quos tenetur autem praesentium laboriosam quisquam unde dolorum expedita ullam velit totam, natus vitae deleniti!</p>
                            <ul className='body-2'> 
                                {brainwaveServices.map((item, index) => (
                                    <li key ={index} className='flex items-start py-4 border-t border-n-6' >
                                       <img width={24} height={25} src={check}/> 
                                        <p className='ml-4'>{item}</p>

                                    </li>
                                ))}
                            </ul>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Services