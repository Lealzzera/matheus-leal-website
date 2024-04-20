import AboutSection from "@/app/components/AboutSection/AboutSection";
import WelcomePageSection from "./components/WelcomePageSection/WelcomePageSection";

export default function Home() {
	return (
		<div className='container'>
			<WelcomePageSection />
			<AboutSection />
		</div>
	);
}
