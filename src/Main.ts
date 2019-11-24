
const NATURAL = [
    "A", "B", "C", "D", "E", "F", "G"
];
const FLATS = [
    // Skipping C♭ and F♭.
    "A♭", "B♭", "D♭", "E♭", "G♭"
];
const SHARPS = [
    // Skipping B♯ and E♯.
    "A♯", "C♯", "D♯", "F♯", "G♯"
];
const ALL = [...NATURAL, ...FLATS, ...SHARPS];

/**
 * Return an integer in the range [0,max).
 */
function random(max: number): number {
    return Math.floor(Math.random()*max);
}

/**
 * Update the UI when the user clicks the page.
 */
function mainTextClick(mainText: HTMLElement) {
    while (true) {
        const note = ALL[random(ALL.length)];
        if (note !== mainText.innerText) {
            mainText.innerText = note;
            break;
        }
    }
}

export function main() {
    const mainText = document.getElementById("main_text") as HTMLElement;
    mainText.onmousedown = function (event: Event) {
        mainTextClick(mainText);
        event.preventDefault();
    };
}
