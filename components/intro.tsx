import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
         Mingjie
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
      <strong>I live in the intersection of technology and education, building software, writing blog posts, and running events.</strong> I use he/him pronouns.
      </h4>
    </section>
  )
}

export default Intro
