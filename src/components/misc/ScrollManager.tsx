import {useEffect} from "react";

export const ScrollManager = () => {
    useEffect(() => {
        const scrollToElement = () => {
            const hash = window.location.hash;
            if (hash) {
                const id = hash.replace('#', '');
                document.getElementById(id)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

            } else {
                // Scroll to header on page refresh && cleared hash
                document.getElementById("header")?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        };

        // Listen to both hashchange and popstate events
        window.addEventListener('hashchange', scrollToElement);
        window.addEventListener('popstate', scrollToElement);

        // Call initially in case the page is loaded without a hash
        scrollToElement();

        // Cleanup function to remove event listeners
        return () => {
            window.removeEventListener('hashchange', scrollToElement);
            window.removeEventListener('popstate', scrollToElement);
        };
    }, []);  // Empty dependency array ensures this effect runs only once

    return null;
};