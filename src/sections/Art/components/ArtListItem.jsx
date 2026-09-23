export default function ArtListItem({src, title, artistName, pubHist}){
	return(
	      <li>
		<div className="frame">
		  <img
		    src={src}/>
		</div>
		<h3>{title}</h3>
		<p>Artist: {artistName}</p>
		<h4>Publication History:</h4>
		<ul>
			{pubHist.map((text, index) => (
			<li key={index}>{text}</li>
			))}
		</ul>
	      </li>
	)

}
