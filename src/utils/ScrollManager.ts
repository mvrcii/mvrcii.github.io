export class ScrollManager {
    private static instance: ScrollManager;
    private isScrolling: boolean = false;
    private scrollTimeout: number | null = null;
    private readonly scrollDuration: number = 1000; // ms to match smooth scroll duration
    private readonly correctionDelay: number = 50; // ms delay before correction

    private constructor() {
        // Singleton instance
    }

    public static getInstance(): ScrollManager {
        if (!ScrollManager.instance) {
            ScrollManager.instance = new ScrollManager();
        }
        return ScrollManager.instance;
    }

    public scrollToSection(sectionId: string, callback?: () => void): void {
        if (this.isScrolling) return;

        const section = document.getElementById(sectionId);
        if (!section) return;

        this.isScrolling = true;

        // Update URL without triggering scroll
        window.history.pushState(null, "", `#${sectionId}`);

        // Find the container that actually scrolls
        const sectionsContainer = document.querySelector("[id^='section-']")?.parentElement;
        if (!sectionsContainer) {
            this.isScrolling = false;
            return;
        }

        // Find section index and calculate position
        const sections = Array.from(sectionsContainer.children);
        const sectionIndex = sections.findIndex(el => el.querySelector(`#${sectionId}`));

        if (sectionIndex === -1) {
            this.isScrolling = false;
            return;
        }

        // Calculate exact scroll position
        const scrollPosition = sectionIndex * window.innerHeight;

        // Scroll with smooth behavior
        sectionsContainer.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });

        // Set a timer to verify and correct scroll position
        if (this.scrollTimeout) {
            window.clearTimeout(this.scrollTimeout);
        }

        this.scrollTimeout = window.setTimeout(() => {
            // Verify position after animation ends
            const currentPosition = sectionsContainer.scrollTop;
            const expectedPosition = sectionIndex * window.innerHeight;

            // If position is off by more than a threshold, correct it
            if (Math.abs(currentPosition - expectedPosition) > 10) {
                sectionsContainer.scrollTo({
                    top: expectedPosition,
                    behavior: 'auto' // Instant correction
                });
            }

            this.isScrolling = false;
            if (callback) callback();
            this.scrollTimeout = null;
        }, this.scrollDuration + this.correctionDelay);
    }

    public isCurrentlyScrolling(): boolean {
        return this.isScrolling;
    }

    public cancelScroll(): void {
        if (this.scrollTimeout) {
            window.clearTimeout(this.scrollTimeout);
            this.scrollTimeout = null;
        }
        this.isScrolling = false;
    }
}