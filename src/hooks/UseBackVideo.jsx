import { useEffect, useRef } from 'react';

export const useBackVideo = (playbackRate = 0.7) => {
    const videoRef = useRef(null);

    // Fade-in + velocidad
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.playbackRate = playbackRate;

        const handleLoadedData = () => {
            video.classList.add('fade-in-background');
        };

        video.addEventListener('loadeddata', handleLoadedData);

        return () => {
            video.removeEventListener('loadeddata', handleLoadedData);
        };
    }, [playbackRate]);

    // Intersection Observer
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && video) {
                console.log('➡ Reproduciendo video desde hook');
                video.play();
            }
        });

        observer.observe(video);

        return () => observer.disconnect();
    }, []);

    return videoRef;
};
