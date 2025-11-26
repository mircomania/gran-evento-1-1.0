import { SectionLp1 } from '../exports/SectionLp1';
import { SectionLp2 } from '../exports/SectionLp2';

const LandingPage = () => {
    return (
        <main>
            <SectionLp1 />

            <section id="section2">
                <SectionLp2 />
            </section>
        </main>
    );
};

export default LandingPage;
