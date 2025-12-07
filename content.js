const TARGET_CLASS = 'uir-form-header';

const STYLES = {
    position: 'sticky',
    top: '0',
    padding: '0px',
    zIndex: '1000'
};

const WHITE_BACKGROUND = {
    backgroundColor: '#fff'
};

const WHITE_RGB = 'rgba(255, 255, 255, 1)'; 
const BLACK_RGB = 'rgba(0, 0, 0, 0)'; 

// --- Primary Logic Function ---
function applyStickyStyle() {
    const headerElement = document.querySelector(`.${TARGET_CLASS}`);
    
    if (headerElement) {
        // Start with the base styles (position, zIndex, padding).
        let stylesToApply = { ...STYLES };
        
        // Get the current computed style.
        const computedStyle = window.getComputedStyle(headerElement);
        const currentColor = computedStyle.backgroundColor;

        // Conditional Logic: ONLY Apply the white background for non-redwood theme.
        if (currentColor === BLACK_RGB) {
            stylesToApply = { ...stylesToApply, ...WHITE_BACKGROUND };
        }

        Object.assign(headerElement.style, stylesToApply);
    }
}

// --- Execution ---
applyStickyStyle();

const observer = new MutationObserver((mutationsList, observer) => {
    applyStickyStyle();
});

observer.observe(document.body, { childList: true, subtree: true });