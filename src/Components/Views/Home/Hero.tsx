import React from 'react'
import Card from '@/Components/Common/Card'
import Container from '@/Components/Common/Container';

const Hero = () => {
  return (
    <Container>
      <section>
        <div className='flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-5 pt-10 pb-24'>
          <div>
            <div className='max-w-[600px] lg:max-w-[280px] object-cover font-semibold border-b-[1px] border-b-black pb-5'>
              <Card image='/cityview.png' buttonTitle='FINANCES' title="8 Reasons To Become A Design Preneur This Days" seccolor={''} fontweight={''} display={''} visible={''} gap={''} alignItems={''} secFontweight={''} secFontSize={''} show={''} imgMaxHeight={''} width={''} outerImg={''} minHeight={''} speed={''} btnText={'Category'} />
            </div>

            <div className='max-w-[600px] lg:max-w-[280px] object-cover font-semibold pt-7 border-b-[1px] border-b-black pb-[22px]'>
              <Card image='/cityview.png' buttonTitle='AUTOMOTIVE' title="Review of the Best Roof Top Cars For This Year" seccolor={''} fontweight={''} display={''} visible={''} gap={''} alignItems={''} secFontweight={''} secFontSize={''} show={''} imgMaxHeight={''} width={''} outerImg={''} minHeight={''} speed={''} btnText={'Category'} />
            </div>
          </div>
          <div className='max-w-[600px]  xl:max-w-[600px] text-lg lg:text-[38px] leading-[20px] lg:leading-[45px] object-cover font-semibold'>
            <Card image='/cityview.png' buttonTitle='ARCITECTURE' title="Announcing Our First Magazine Blog Template on Webflow!" seccolor={''} fontweight={''} display={''} visible={''} gap={''} alignItems={''} secFontweight={''} secFontSize={''} show={''} imgMaxHeight={''} width={''} outerImg={''} minHeight={''} speed={''} btnText={'Category'} />
          </div>
          <div>
            <div className='max-w-[600px] lg:max-w-[280px] object-cover  font-semibold border-b-[1px] border-b-black pb-5'>
              <Card image='/cityview.png' buttonTitle='LIFE STYLE' title="10 Healthy Food Blogs To Follow Right Now" seccolor={''} fontweight={''} display={''} visible={''} gap={''} alignItems={''} secFontweight={''} secFontSize={''} show={''} imgMaxHeight={''} width={''} outerImg={''} minHeight={''} speed={''} btnText={'Category'} />
            </div>
            <div className='max-w-[600px] lg:max-w-[280px] object-cover  font-semibold pt-7 border-b-[1px] border-b-black pb-9'>
              <Card image='/cityview.png' buttonTitle='FINANCES' title="Review of the Best Roof Top Cars For This Year" seccolor={''} fontweight={''} display={''} visible={''} gap={''} alignItems={''} secFontweight={''} secFontSize={''} show={''} imgMaxHeight={''} width={''} outerImg={''} minHeight={''} speed={''} btnText={'Category'} />
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Hero;