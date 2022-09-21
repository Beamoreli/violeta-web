import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocationDot,
	faBuilding,
	faBars,
	faStar,
	faLaptop,
	faCircleQuestion,
	faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-top-container">
				<a href="Home" className="navbar-top-link">
					Home
				</a>
				<a href="Promocoes" className="navbar-top-link">
					Promoções
				</a>
				<a href="Fale Conosco" className="navbar-top-link">
					Fale conosco
				</a>
				<a href="Politica de privacidade" className="navbar-top-link">
					Política de privacidade
				</a>
				<a href="Trabalhe conosco" className="navbar-top-link">
					Trabalhe conosco
				</a>
				<a href="#Violeta e voce" className="navbar-top-link">
					Violeta e você
				</a>
			</div>
			<div className="navbar-conf-middle-up">
				<div className="navbar-middle-up-container">
					<div className="navbar-middle">
						<div>
							<FontAwesomeIcon
								icon={faLocationDot}
								color={"white"}
								fontSize={25}
							/>
						</div>
						<div className="navbar-middle-up-inner-container">
							<a href="alterar" className="alterar-dados">
								ALTERAR
							</a>
							<span>Loja Torre 2</span>
						</div>
					</div>
					<div className="navbar-conf-middle-up-inner">
						<div>
							<FontAwesomeIcon
								icon={faBuilding}
								color={"white"}
								fontSize={25}
							/>
						</div>
						<div className="navbar-middle-up-inner-container">
							<a href="endereco" className="alterar-dados">
								ALTERAR
							</a>
							<span>Selecione um endereço</span>
						</div>
					</div>
				</div>
			</div>
			<div className="navbar-middle-down-conf">
				<div className="navbar-middle-down-container">
					<form className="custom-search">
						<input
							className="custom-search-input"
							type="text"
							placeholder=" O que você esta procurando?"
						/>
						<button className="custom-search-botton" type="submit">
							<FontAwesomeIcon
								icon={faSearch}
								color={"white"}
								fontSize={10}
							/>
							<span>Procurar</span>
						</button>
					</form>
					<button className="botao">Entrar ou cadastrar</button>
				</div>
			</div>
			<div className="bottom-conf">
				<div className="search-responsive">
					<form className="custom-search">
						<input
							className="custom-search-input"
							type="text"
							placeholder=" O que você esta procurando?"
						/>
						<button className="custom-search-botton" type="submit">
							<FontAwesomeIcon
								icon={faSearch}
								color={"black"}
								fontSize={10}
							/>
						</button>
					</form>
				</div>
				<div className="navbar-bottom-container">
					<div className="navbar-div"></div>
					<div className="navbar-bottom-conf">
						<a href="favoritos" className="favs">
							<FontAwesomeIcon
								icon={faStar}
								color={"white"}
								fontSize={18}
							/>
							Favoritos
						</a>

						<a href="comofunciona" className="favs">
							<FontAwesomeIcon
								icon={faCircleQuestion}
								color={"white"}
								fontSize={18}
							/>
							Como funciona?
						</a>
					</div>
					<div className="site">
						<a href="siteinstitucional" className="site">
							<FontAwesomeIcon
								icon={faLaptop}
								color={"white"}
								fontSize={15}
							/>
							Site institucional
						</a>
					</div>
				</div>
			</div>
			<div className="logo-box">
				<div className="logo-box-responsive">
					<img
						src="/header-logo.png"
						alt="vcs podiam ter passado a imagem rs"
						width={"200px"}
					/>
				</div>
				<div className="box-logo">
					<FontAwesomeIcon
						icon={faBars}
						color={"white"}
						fontSize={20}
					/>
					<span>Departamentos</span>
				</div>
			</div>
			<img
				className="logo-responsive"
				src="/header-logo.png"
				alt="vcs podiam ter passado a imagem rs"
				width={"200px"}
			/>
		</nav>
	);
};

export default Navbar;
