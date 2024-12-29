import '@/styles/module.home.css';
import IntroSection from "@/app/ui/home/IntroSection";
import EventsSection from "@/app/ui/home/eventsSection";

export default function Home() {
  return (
    <main
    className="max-w-screen-2xl mx-auto">
      <IntroSection />
      <EventsSection />
    </main>
  );
}
