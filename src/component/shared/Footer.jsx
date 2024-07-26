import React from 'react'
import style from './Footer.module.css'
import logoWhite from '../../assets/Logo-White.png'
import phoneIcon from '../../assets/PHONE-ICON.svg'
import mailIcon from '../../assets/MAIL-ICON.svg'

export default function Footer() {
	return (
		<footer>
			<div className={style['footer-container']}>
				<div className={style['footer-icon']}>
					<img
						className={style['footer-logo']}
						src={logoWhite}
						alt=''
					/>
					<div>
						<img className={style['mail']} src={mailIcon} alt='' />
						<img
							className={style['phone']}
							src={phoneIcon}
							alt=''
						/>
					</div>
				</div>
				<div className={style['footer-product']}>
					<a className={style['footer-nav']} href='menu.html'>
						Products
					</a>
					<p className={style['footer-nav-list']}>Coffee Based</p>
					<p className={style['footer-nav-list']}>Non-Coffee</p>
					<p className={style['footer-nav-list']}>Tea Based</p>
				</div>
				<div className={style['footer-store']}>
					<a className={style['footer-nav']} href='findus.html'>
						Store
					</a>
					<p className={style['footer-nav-list']}>Location</p>
				</div>
				<div className={style['footer-contact']}>
					<a className={style['footer-nav']} href='help.html'>
						Contact
					</a>
					<p className={style['footer-nav-list']}>Customer Service</p>
				</div>
			</div>
		</footer>
	)
}
