import { AnimatedBurger } from '@/components/animated-burger'
import { AnimatedText } from '@/components/animated-text'
import { MaskReveal } from '@/components/mask-reveal'
import { NoSaltNoLife } from '@/components/no-salt-no-life'
import { Img } from '@/components/utility/img'
import { Wrapper } from '@/components/wrapper'

export default async function Page() {
  return (
    <Wrapper>
      <section className='bg-sandy-beach dr-h-930 relative flex w-screen flex-col items-center justify-center'>
        <div className='dr-mb-150 z-30 flex flex-col items-center justify-center'>
          <h1 className='font-sink text-black-water text-shadow z-30 text-center text-[170px]/[1] uppercase'>
            ANORMAL <span className='lowercase'>i</span>Y
            <span className='lowercase'>i</span>
          </h1>
          <h2 className='font-self-written dr-text-40 text-red-carpet z-30 text-center text-5xl text-red-500'>
            Günlük ve Cok İddialı.
          </h2>
        </div>
        <div className='dr-w-400 dr-h-500 bg-red-carpet dr-top-200 dr-left-100 absolute z-20 -rotate-12'>
          <Img
            src='/img/sample.jpg'
            alt='Red Carpet'
            fill
            sizes='30vw'
            className='object-cover'
          />
        </div>
        <div className='dr-w-260 dr-h-300 bg-red-carpet dr-top-100 dr-left-600 absolute z-20 rotate-6'>
          <Img
            src='/img/sample.jpg'
            alt='Red Carpet'
            fill
            sizes='30vw'
            className='object-cover'
          />
        </div>
        <div className='dr-w-400 dr-h-500 bg-red-carpet dr-top-280 dr-right-100 absolute z-20 rotate-12'>
          <Img
            src='/img/sample.jpg'
            alt='Red Carpet'
            fill
            sizes='30vw'
            className='object-cover'
          />
        </div>
      </section>
      <NoSaltNoLife />
      <div className='bg-black-water text-sandy-beach dr-py-80 -dr-mt-150 right-0 bottom-0 left-0 z-10 flex flex-col items-center justify-center'>
        <div className='dr-max-w-1000'>
          <AnimatedText
            className='font-sink text-center font-black uppercase'
            duration={0.8}
            stagger={0.1}
          >
            <span className='dr-text-48 dr-leading-60'>
              SALTBAE BURGER’DA HER BURGER, GÜNLÜK OLARAK ELDE HAZIRLANIR. HER
              SABAH TAZE ÇEKiLEN 180 GRAMLIK ÖZEL DANA KÖFTELER, KENDi
              FIRINIMIZDA PiŞEN iMZA EKMEKLERiMiZLE BULUŞUR.
            </span>
          </AnimatedText>
        </div>
      </div>
      <section className='bg-black-water dr-p-30 dr-gap-30 grid grid-cols-2'>
        <div className='dr-h-440 bg-red-carpet dr-rounded-8 relative overflow-hidden'>
          <Img
            src='/img/sample.jpg'
            alt='Red Carpet'
            fill
            sizes='30vw'
            className='object-cover'
          />
        </div>
        <div className='dr-h-650 bg-red-carpet dr-rounded-8 relative overflow-hidden'>
          <Img
            src='/img/sample.jpg'
            alt='Red Carpet'
            fill
            sizes='30vw'
            className='object-cover'
          />
        </div>
      </section>
      <section className='bg-black-water text-sandy-beach dr-p-30 dr-gap-30 flex flex-col items-center justify-center'>
        <div className='dr-max-w-1000 flex flex-col items-center justify-center'>
          <AnimatedText
            className='font-sink text-center font-black uppercase'
            duration={0.8}
            stagger={0.1}
          >
            <span className='dr-text-48 dr-leading-60'>
              Bu sadece BiR burger değil. Bu lezzet, bir imza: cesur, tatmin
              edici ve mükemmel pişirilmiş. Saltbae TARZI.
            </span>
          </AnimatedText>
        </div>
        <div className='grid grid-cols-3'>
          <div className='flex items-center justify-center'>
            <div className='dr-max-w-300 flex flex-col items-center justify-center'>
              <AnimatedText
                className='font-sink text-center font-black uppercase'
                duration={0.8}
                stagger={0.1}
              >
                <span className='dr-text-48 dr-leading-60'>
                  HER GÜN TAZE ÇEKiLMiŞ DANA ETi
                </span>
              </AnimatedText>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='dr-max-w-300 flex flex-col items-center justify-center'>
              <AnimatedText
                className='font-sink text-center font-black uppercase'
                duration={0.8}
                stagger={0.1}
              >
                <span className='dr-text-48 dr-leading-60'>
                  KENDi FIRINIMIZDA PiŞEN iMZA EKMEKLERiMiZ
                </span>
              </AnimatedText>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='dr-max-w-300 flex flex-col items-center justify-center'>
              <AnimatedText
                className='font-sink text-center font-black uppercase'
                duration={0.8}
                stagger={0.1}
              >
                <span className='dr-text-48 dr-leading-60'>
                  SALTBAE USULÜ IZGARA
                </span>
              </AnimatedText>
            </div>
          </div>
        </div>
      </section>
      <section>
        <AnimatedBurger />
      </section>
      <MaskReveal />
    </Wrapper>
  )
}
