import { useEffect, useState } from "react"
import ArtList from "./components/ArtList"

function ArtsSection() {
  const [art, setArt] = useState([])

  const fetchArtData = () => {
    fetch('https://boolean-uk-api-server.fly.dev/art')
    .then(res => res.json())
    .then(setArt)
    console.log(art)
  }

  useEffect(() => {fetchArtData()}, [])
  return (
    <section>
      <h2>Arts Section</h2>
      <ArtList artList={art}/>
    </section>
  )
}

export default ArtsSection
