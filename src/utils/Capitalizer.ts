
export const Capitalizer = (word: string | null): string => {
    if (word) return word?.replace(word?.charAt(0), word?.charAt(0).toUpperCase());
    else return `${word}`;
}
