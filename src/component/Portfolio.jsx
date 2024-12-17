import React from 'react'
import TitleLine from './shared/TitleLine'
import ImgContainer from './shared/ImgContainer'
import TitleSection from './shared/TitleSection'
export default function Portfolio() {
  return (
    <>
     <section className='Portfolio'>
        <TitleSection titleText='PORTFOLIO' titleColor='blue' />
      <TitleLine linecolor='blue'/>
      <div className="container py-5">
       <div className="row gy-4">
       <div className="col-lg-4">
       <ImgContainer imgSrc='src/assets/imgs/cabin.png' description='cabin image' />
       </div>
       <div className="col-lg-4">
       <ImgContainer imgSrc='src/assets/imgs/cake.png' description='cake image' />
       </div>
       <div className="col-lg-4">
       <ImgContainer imgSrc='src/assets/imgs/circus.png' description='circus image' />
       </div>
      
       <div className="col-lg-4">
       <ImgContainer imgSrc='src/assets/imgs/game.png' description='game image' />
       </div>
       <div className="col-lg-4">
       <ImgContainer imgSrc='src/assets/imgs/safe.png' description='safe image' />
       </div>
       <div className="col-lg-4">
       <ImgContainer imgSrc='src/assets/imgs/submarine.png' description='submarine image' />
       </div>
       </div>      
      </div>

      

     </section>
    
    </>
  )
}
