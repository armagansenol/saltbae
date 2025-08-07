import { AnimatedText } from "@/components/animated-text"

export default function Home() {
  return (
    <div className="font-sans">
      <div className="h-[50vh] w-screen bg-amber-200"></div>
      <div className="flex flex-col justify-center items-center py-24">
        <AnimatedText className="font-black text-center uppercase" duration={1} stagger={0.1}>
          <span className="text-[140px] leading-snug">At Saltbae Burger,</span>
          <br />
          <span className="text-[64px] leading-snug">each burger is handcrafted fresh, daily.</span>
          <br />
          <span className="text-[140px] leading-snug">Premium 180g</span>
          <br />
          <span className="text-[153px] leading-snug">beef patties,</span>
          <br />
          <span className="text-[72px] leading-snug">ground every morning, served on</span>
          <br />
          <span className="text-[72px] leading-none">signature buns baked in-house.</span>
        </AnimatedText>
      </div>
      <div className="h-[100vh] w-screen bg-amber-300"></div>
    </div>
  )
}
