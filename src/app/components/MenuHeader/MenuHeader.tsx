"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./MenuHeader.module.css";
import MenuMobileIcon from "@/icons/MenuMobileIcon";
import GitHubIcon from "@/icons/GitHubIcon";
import LinkedInIcon from "@/icons/LinkedInIcon";

const MenuHeader = () => {
	const [screenSize, setScreenSize] = useState<number | null>(null);
	const [menuMobileOpen, setMenuMobileOpen] = useState(false);
	const mobileButtonRef = useRef<HTMLDivElement | null>(null);
	const menuSideBarContainerRef = useRef<HTMLDivElement | null>(null);
	const menuMobileSideBarRef = useRef<HTMLDivElement | null>(null);

	const handleToggleMobileMenu = (stateMenuOpen: boolean) => {
		if (stateMenuOpen) {
			mobileButtonRef.current?.classList.add("open");
			menuSideBarContainerRef.current?.classList.add("openSideBarContainer");
			menuMobileSideBarRef.current?.classList.add("openMobileSideBarMenu");
			menuMobileSideBarRef.current?.classList.remove("closeMobileSideBarMenu");
		} else {
			mobileButtonRef.current?.classList.remove("open");
			menuMobileSideBarRef.current?.classList.remove("openMobileSideBarMenu");
			menuMobileSideBarRef.current?.classList.add("closeMobileSideBarMenu");
		}
	};

	useEffect(() => {
		handleToggleMobileMenu(menuMobileOpen);
	}, [menuMobileOpen]);

	// const handleOpenMobileMenu = () => {
	// 	const mobileButton = mobileButtonRef.current;
	// 	const mobileMenuSideBarContainer = menuSideBarContainerRef.current;
	// 	const mobileMenuSideBar = menuMobileSideBarRef.current;

	// 	if (mobileButton) {
	// 		mobileButton.classList.toggle("open");
	// 		setMenuMobileOpen(true);
	// 		mobileMenuSideBarContainer?.classList.toggle("openSideBarContainer");
	// 		mobileMenuSideBar?.classList.toggle("openMobileSideBarMenu");
	// 	}
	// };

	useEffect(() => {
		const changeWindowMenu = () => {
			setScreenSize(window.innerWidth);
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
				<nav className={`${styles.menuNav} container `}>
					<ul className={styles.ulList}>
						<li>
							<a href='#'>About</a>
						</li>
						<li>
							<a href='#'>Projects</a>
						</li>
						<li>
							<a href='#'>Contact</a>
						</li>
					</ul>
					<div className={styles.iconsLinks}>
						<a href='https://www.linkedin.com'>
							<LinkedInIcon />
						</a>
						<a href='https://www.github.com'>
							<GitHubIcon />
						</a>
					</div>
				</nav>
			)}
			{screenSize !== null && screenSize <= 900 && (
				<div className={styles.menuMobileContainer}>
					<div className={styles.iconsLinks}>
						<a href='https://www.linkedin.com'>
							<LinkedInIcon />
						</a>
						<a href='https://www.github.com'>
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
						className={styles.menuMobileSidebarContainer}
					>
						<div
							ref={menuMobileSideBarRef}
							className={styles.menuMobileSidebar}
						></div>
					</div>
				</div>
			)}
		</header>
	);
};

export default MenuHeader;
