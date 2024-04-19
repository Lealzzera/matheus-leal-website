"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./MenuHeader.module.css";
import MenuMobileIcon from "@/icons/MenuMobileIcon";
import GitHubIcon from "@/icons/GitHubIcon";
import LinkedInIcon from "@/icons/LinkedInIcon";

const menuOptions = [
	{ id: 1, option: "About" },
	{ id: 2, option: "Projects" },
	{ id: 3, option: "Contact" },
];

const MenuHeader = () => {
	const [screenSize, setScreenSize] = useState<number | null>(null);
	const [menuMobileOpen, setMenuMobileOpen] = useState(false);

	const mobileButtonRef = useRef<HTMLDivElement | null>(null);
	const menuSideBarContainerRef = useRef<HTMLDivElement | null>(null);
	const menuMobileSideBarRef = useRef<HTMLDivElement | null>(null);

	const handleToggleMobileMenu = (stateMenu: boolean) => {
		if (stateMenu) {
			menuSideBarContainerRef.current?.classList.remove(
				"closeSideBarContainer"
			);
			mobileButtonRef.current?.classList.add("open");
			menuSideBarContainerRef.current?.classList.add("openSideBarContainer");
			menuMobileSideBarRef.current?.classList.add("openMobileSideBarMenu");

			menuMobileSideBarRef.current?.classList.remove("closeMobileSideBarMenu");
		} else {
			mobileButtonRef.current?.classList.remove("open");
			menuMobileSideBarRef.current?.classList.add("closeMobileSideBarMenu");
			menuSideBarContainerRef.current?.classList.add("closeSideBarContainer");
		}
	};

	const handleCloseMenuOutside = (value: EventTarget) => {
		return value === menuSideBarContainerRef.current
			? setMenuMobileOpen(false)
			: null;
	};

	const handleSelectMenuOption = (value: any) => {
		const links = document.querySelectorAll("a");
		links.forEach((link) => {
			link.classList.remove("active");
		});

		const style = document.createElement("style");
		document.head.appendChild(style);

		const left = `${value.target.offsetWidth / 2 - 11}`;
		style.innerHTML = `
		.active::before {
		content: '';
		position: absolute;
		height: 1px;
		width: 22px;
		background-color: var(--white);
		bottom: 8px;
		left: ${left}px;
	}
`;
		value.target.classList.add("active");
	};

	useEffect(() => {
		handleToggleMobileMenu(menuMobileOpen);
	}, [menuMobileOpen]);

	useEffect(() => {
		const changeWindowMenu = () => {
			setScreenSize(window.innerWidth);
			setMenuMobileOpen(false);
		};

		if (typeof window !== "undefined") {
			setScreenSize(window.innerWidth);
			window.addEventListener("resize", changeWindowMenu);
		}

		return () => {
			if (typeof window !== "undefined") {
				window.removeEventListener("resize", changeWindowMenu);
			}
		};
	}, []);

	return (
		<header>
			{screenSize !== null && screenSize > 900 && (
				<nav className={`${styles.menuNavDesktop}`}>
					<ul className={styles.ulDesktopList}>
						{menuOptions.map(({ id, option }) => (
							<li onClick={(e) => handleSelectMenuOption(e)} key={id}>
								<a
									className={styles.optionMenuDesktop}
									href={`#${option.toLowerCase()}`}
								>
									{option}
								</a>
							</li>
						))}
					</ul>
					<div className={styles.iconsLinks}>
						<a href='https://www.linkedin.com/in/lealmatheus/' target='_blank'>
							<LinkedInIcon />
						</a>
						<a href='https://github.com/Lealzzera' target='_blank'>
							<GitHubIcon />
						</a>
					</div>
				</nav>
			)}
			{screenSize !== null && screenSize <= 900 && (
				<div className={styles.menuMobileContainer}>
					<div className={styles.iconsLinks}>
						<a href='https://www.linkedin.com/in/lealmatheus/' target='_blank'>
							<LinkedInIcon />
						</a>
						<a href='https://github.com/Lealzzera' target='_blank'>
							<GitHubIcon />
						</a>
					</div>
					<div
						ref={mobileButtonRef}
						onClick={() => setMenuMobileOpen(!menuMobileOpen)}
						className={`${styles.menuMobileButton}`}
					>
						<MenuMobileIcon />
					</div>
					<div
						ref={menuSideBarContainerRef}
						onClick={(e) => handleCloseMenuOutside(e.target)}
						className={styles.menuMobileSidebarContainer}
					>
						<nav
							ref={menuMobileSideBarRef}
							className={styles.menuMobileSidebar}
						>
							<ul className={styles.ulMobileList}>
								{menuOptions.map(({ id, option }) => (
									<li onClick={() => setMenuMobileOpen(false)} key={id}>
										<a
											className={styles.optionMenuMobile}
											href={`#${option.toLowerCase()}`}
										>
											{option}
										</a>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</div>
			)}
		</header>
	);
};

export default MenuHeader;
