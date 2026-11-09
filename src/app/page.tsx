import { About } from "@/components/sections/about";
import { ContactCta } from "@/components/sections/contact-cta";
import { Hero } from "@/components/sections/hero";
import ImageHotspotFeatures from "@/components/sections/image-hotspot-features";
import { Plans } from "@/components/sections/plans";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";

export default function Home(): React.ReactElement {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <ImageHotspotFeatures />
      {/*<Plans />*/}
      <About />
      <ContactCta />
    </main>
  );
}
