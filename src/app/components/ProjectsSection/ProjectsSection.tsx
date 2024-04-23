import React from "react";
import styles from "./ProjectsSection.module.css";
import TitleGradientComponent from "../TitleGradientComponent/TitleGradientComponent";
import SubTitleComponent from "../SubTitleComponent/SubTitleComponent";

const ProjectsSection = () => {
	return (
		<section
			id='projects'
			data-aos='fade-down'
			className={`${styles.projectsContainer} container`}
		>
			<div className={styles.descriptionContainer}>
				<TitleGradientComponent
					fontDesktopSize='3rem'
					fontMobileSize='2.25rem'
					textColor={
						"-webkit-linear-gradient(left, var(--light-yellow) 0%, var(--yellow) 34%, var(--orange) 100%)"
					}
					titleText='Learn, Develop, Repeat.'
				/>
				<p>
					Here you can navigate and check out some projects I’ve worked in my
					trajectory. Some of them are still active, others have been
					discontinued.
				</p>
			</div>
			<div className={styles.projectsWrap}>
				<SubTitleComponent subTitleText='Projects' />
				<ul className={styles.projectsList}>
					<li>
						<a href='https://campusdigital.pucrs.br/login' target='blank'>
							Campus Digital - PUCRS
						</a>
					</li>
					<li>
						<a
							href='https://campusdigital.uninassau.edu.br/login'
							target='blank'
						>
							Campus Digital - UNINASSAU
						</a>
					</li>
					<li>
						<a href='https://campusdigital.faap.br/login' target='blank'>
							Campus Digital - FAAP
						</a>
					</li>
					<li>
						<a href='https://www.ba.senac.br' target='blank'>
							Senac - BA
						</a>
					</li>
					<li>
						<a href='https://www.mprs.mp.br/' target='blank'>
							Ministério Público do Rio Grade do Sul - MPRS
						</a>
					</li>
					<li>
						<a href='https://www.sp.senac.br/' target='blank'>
							Senac - SP
						</a>
					</li>
					<li>
						<a href='https://www.alelo.com.br/' target='blank'>
							Alelo
						</a>
					</li>
					<li>
						<a href='https://portal.anhembi.br/' target='blank'>
							Universidade Anhembi Morumbi
						</a>
					</li>
					<li>
						<a href='https://www.raizen.com.br/' target='blank'>
							Raízen
						</a>
					</li>
					<li>
						<a href='https://www.usjt.br/' target='blank'>
							Universidade São Judas
						</a>
					</li>
					<li>
						<a href='https://www.capplatform.com/' target='blank'>
							CAP Plataform
						</a>
					</li>
					<li>
						<a href='https://www.userede.com.br/' target='blank'>
							Rede Itaú
						</a>
					</li>
					<li>
						<a href='https://www.iteris.com.br/' target='blank'>
							Iteris Software & Consulting
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default ProjectsSection;
