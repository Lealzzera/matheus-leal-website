import AboutSection from "@/app/components/AboutSection/AboutSection";
import WelcomePageSection from "./components/WelcomePageSection/WelcomePageSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection/ContactMeSection";

export default function Home() {
	return (
		<div className='container'>
			<WelcomePageSection />
			<AboutSection />
			<ProjectsSection />
			<ContactMeSection />
		</div>
	);
}
