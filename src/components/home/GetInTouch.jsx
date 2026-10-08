const GetInTouch = ({ heading, message, link }) => {
	return (
		<>
			<h2 className="display-4 pb-3 text-center">{heading}</h2>
			<p className="lead text-center pb-3">
				{message}{' '}
				<a className="text-decoration-none" href={link?.to} target="_blank" rel="noopener noreferrer">
					{link?.label}
				</a>
			</p>
		</>
	);
};

export default GetInTouch;
