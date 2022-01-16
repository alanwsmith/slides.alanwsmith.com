import HeadTag from '../components/HeadTag'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-prose mx-auto pt-6">
      <HeadTag
        description="The slide decks from my presentations and videos"
        image="https://slides.alanwsmith.com/og-images/main.png"
        title="The Slides Of Alan"
        type="website"
        url="https://slides.alanwsmith.com"
      />
      <h2>My Slide Decks</h2>
      <ul>
        <li>
          <Link href="/jam-dev-2022-video">
            <a>Jam.Dev 2022 Video</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
