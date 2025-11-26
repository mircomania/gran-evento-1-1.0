import styles from '../../styles/modules/sectionLp1.module.css';

import { BotonNav } from '../utils/BotonNav';

import { useBackVideo } from '../../hooks/UseBackVideo';

export const SectionLp1 = () => {
    const videoRef = useBackVideo(0.9);

    const handleScroll = () => {
        const section2 = document.getElementById('section2');
        if (section2) {
            section2.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className={styles.sectionContainer}>
            <video
                ref={videoRef}
                className={`${styles.videoBackground} fade-in-background`}
                autoPlay
                loop
                muted
                playsInline
                poster="/gran-evento-1-1.0/videos/video1.jpg"
            >
                <source src="/gran-evento-1-1.0/videos/video1.webm" type="video/webm" />
                <source src="/gran-evento-1-1.0/videos/video1.mp4" type="video/mp4" />
            </video>

            <div className={styles.sectionContenido}>
                <header className={styles.sectionTitulo}>
                    <h1 className="bold-text">
                        Tu evento ideal
                        <br />
                        Comienza aquí
                    </h1>

                    <BotonNav dataCta="inicio-1-btn">Descubrir</BotonNav>
                </header>

                <div
                    className={styles.pasoPag}
                    onClick={handleScroll}
                    role="button"
                    tabIndex={0}
                    aria-label="Ir a la siguiente sección"
                    onKeyDown={(e) => e.key === 'Enter' && handleScroll()}
                ></div>
            </div>
        </section>
    );
};
