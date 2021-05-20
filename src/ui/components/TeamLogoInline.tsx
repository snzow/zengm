const TeamLogoInline = ({
	imgURL,
	imgURLSmall,
	size,
	style,
}: {
	imgURL?: string;
	imgURLSmall?: string;
	size: number;
	style?: React.CSSProperties;
}) => {
	const actualImgURL = imgURLSmall ?? imgURL;
	if (!actualImgURL) {
		return null;
	}

	return (
		<div
			className="d-flex align-items-center justify-content-center"
			style={{ height: size, width: size, ...style }}
		>
			<img className="mw-100 mh-100" src={actualImgURL} alt="" />
		</div>
	);
};

export default TeamLogoInline;
