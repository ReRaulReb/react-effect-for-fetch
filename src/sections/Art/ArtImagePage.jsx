import { Link, useLocation } from "react-router-dom";

export default function ArtImagePage(){
	const { state } = useLocation();
	const src = state;

	return(
		<div className="frame">
		<Link to="/">← Back to main page</Link>
			<img
			src={src}/>
		</div>
	)
}
