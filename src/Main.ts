
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

/**
 * Return an integer in the range [0,max).
 */
function random(max: number): number {
    return Math.floor(Math.random()*max);
}

/**
 * Update the UI when the user clicks the page.
 */
function mainTextClick(mainText: HTMLElement,
                       naturals: boolean, flats: boolean, sharps: boolean,
                       major: boolean, minor: boolean, dominantSeventh: boolean, minorSeventh: boolean) {

    // Set of notes we can play.
    let notes: string[] = [];
    if (naturals) {
        notes = notes.concat(NATURAL);
    }
    if (flats) {
        notes = notes.concat(FLATS);
    }
    if (sharps) {
        notes = notes.concat(SHARPS);
    }
    if (notes.length === 0) {
        return;
    }

    // Types of chords we can play.
    let suffixes: string[] = [];
    if (major) {
        suffixes.push("");
    }
    if (minor) {
        suffixes.push("m");
    }
    if (dominantSeventh) {
        suffixes.push("7");
    }
    if (minorSeventh) {
        suffixes.push("m7");
    }
    if (suffixes.length === 0) {
        return;
    }

    // Choose new text.
    while (true) {
        const note = notes[random(notes.length)] + suffixes[random(suffixes.length)];
        if (note !== mainText.innerText) {
            mainText.innerText = note;
            break;
        }
    }
}

export function main() {
    const mainText = document.getElementById("main_text") as HTMLElement;
    const optionsButton = document.getElementById("options_button") as HTMLElement;
    const options = document.getElementById("options") as HTMLElement;

    const naturals = document.getElementById("naturals") as HTMLInputElement;
    const flats = document.getElementById("flats") as HTMLInputElement;
    const sharps = document.getElementById("sharps") as HTMLInputElement;
    const major = document.getElementById("major") as HTMLInputElement;
    const minor = document.getElementById("minor") as HTMLInputElement;
    const dominantSeventh = document.getElementById("dominant_seventh") as HTMLInputElement;
    const minorSeventh = document.getElementById("minor_seventh") as HTMLInputElement;

    optionsButton.onclick = function (event: Event) {
        // Toggle options.
        if (options.style.display === "block") {
            options.style.display = "none";
        } else {
            options.style.display = "block";
        }

        event.preventDefault();
    };

    mainText.onmousedown = function (event: Event) {
        mainTextClick(mainText,
            naturals.checked, flats.checked, sharps.checked,
            major.checked, minor.checked, dominantSeventh.checked, minorSeventh.checked
            );
        event.preventDefault();
    };
}
