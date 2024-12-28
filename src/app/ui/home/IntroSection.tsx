import { homeContent } from "@/data/homeContent";


export default function IntroSection() {
    return (
        <section
            className="home">
            <h1>{homeContent.intro.title}</h1>
            <p>{homeContent.content}</p>
        </section>
    );
}
