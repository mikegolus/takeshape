import { Projects } from '@/components/projects/projects'
import { Intro } from '@/components/intro/intro'
import { LetsTalk } from '@/components/lets-talk/lets-talk'

export default function Home() {
  return (
    <>
      <Intro />
      <Projects />
      <LetsTalk />
    </>
  )
}
