import React from 'react'
import style from './Navbar.module.css'
import logoWhite from '../../assets/Logo-White.png'

export default function Navbar() {
	return (
		<header>
			<div className={style['top-wrapper']}>
				<div className={style['heading']}>
					<a href='index.html'>
						<img className={style['logo']} src={logoWhite} alt='' />
					</a>
					<nav>
						<ul>
							<li>
								<a href='menu.html'>Products</a>
							</li>
							<li>
								<a href='findus.html'>Store</a>
							</li>
							<li>
								<a href='help.html'>Contact</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}
