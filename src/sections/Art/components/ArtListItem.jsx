import { Link } from "react-router-dom";

export default function ArtListItem({src, title, artistName, pubHist, id}){
	return(
	<li>
		<div className="frame">
			<Link to = {`/image/${id}`} state={`https://boolean-uk-api-server.fly.dev${src}`}>
				<img
				src={`https://boolean-uk-api-server.fly.dev${src}`}/>
			</Link>
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
