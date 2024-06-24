import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hey 👋, I'm Shardul
      </h1>
      <p className="mb-4">
        {`- Grew up in 6 different countries
          - CS @ U of Toronto.
          - Founding engineer of 2 startups during my degree 1) Bibbit, a platform for authors to gain traction so publishers don't hold all the power and 2) emotiv, a music classification app that categorises music by emotion rather than specific genres.
          - Created benchmarking software for ML models that were trained in decentralized, check out [bittensor.com](http://bittensor.com/)
          - Worked at AWS Cloud Map where my main focus was on scaling
          - Building something new in climate-tech.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
