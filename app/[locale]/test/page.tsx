import { AnimatedBurger } from '@/components/animated-burger'
import { Wrapper } from '@/components/wrapper'

export default async function Page() {
  return (
    <Wrapper>
      <section className='bg-black-water flex h-screen w-screen items-center justify-center'>
        <span className='font-sink text-sandy-beach dr-text-150'>TEST</span>
      </section>
      <section>
        <AnimatedBurger />
      </section>
      <section className='bg-black-water flex h-screen w-screen items-center justify-center'>
        <span className='font-sink text-sandy-beach dr-text-150'>TEST</span>
      </section>
    </Wrapper>
  )
}
