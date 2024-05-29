import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavBar } from "@/components/landing-navbar";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
    return (
        <div className="h-full">
            <LandingNavBar />
            <LandingHero />
            <LandingContent />
        </div>
    )
}

export default LandingPage;