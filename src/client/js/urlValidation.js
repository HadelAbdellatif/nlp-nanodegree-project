function checkUrlValidation (url) {
    try {
        new URL(url);
        return true; // Valid URL
    } catch (e) {
        return false; // Invalid URL
    }
}

export { checkUrlValidation };