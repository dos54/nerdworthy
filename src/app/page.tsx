import '@/styles/module.home.css';
import IntroSection from "@/app/ui/home/IntroSection";
import EventsSection from "@/app/ui/home/eventsSection";
import { getEvents } from '@/utils/getEvents';

export default async function Home() {
  const events = await getEvents();

  return (
    <main
    className="">
      <IntroSection />
      <EventsSection events={events}/>
    </main>
  );
}
