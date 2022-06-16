import smPicture from "./../assets/logo.png";


const Header = () => {
	return(
		<header className="header">
			<div>
			<img src={smPicture} className="logo" />
			</div>
			
		</header>
	)
}

export default Header;