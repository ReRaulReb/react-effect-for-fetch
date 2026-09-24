import ArtListItem from "./ArtListItem";

export default function ArtList({artList}){
	return(
	<div className="scroll-container">
		<ul className="art-list">

		{artList.map((art) => (
		<ArtListItem key={art.id}
		src = {art.imageURL} title={art.title} 
		artistName={art.artist} pubHist={art.publicationHistory}
		id={art.id}/>
		))}
		</ul>
	</div>
	)

}
