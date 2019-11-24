define("Main", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    function random(max) {
        return Math.floor(Math.random() * max);
    }
    /**
     * Update the UI when the user clicks the page.
     */
    function mainTextClick(mainText, naturals, flats, sharps, major, minor, dominantSeventh, minorSeventh) {
        // Set of notes we can play.
        let notes = [];
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
        let suffixes = [];
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
    function main() {
        const mainText = document.getElementById("main_text");
        const optionsButton = document.getElementById("options_button");
        const options = document.getElementById("options");
        const naturals = document.getElementById("naturals");
        const flats = document.getElementById("flats");
        const sharps = document.getElementById("sharps");
        const major = document.getElementById("major");
        const minor = document.getElementById("minor");
        const dominantSeventh = document.getElementById("dominant_seventh");
        const minorSeventh = document.getElementById("minor_seventh");
        optionsButton.onclick = function (event) {
            // Toggle options.
            if (options.style.display === "block") {
                options.style.display = "none";
            }
            else {
                options.style.display = "block";
            }
            event.preventDefault();
        };
        mainText.onmousedown = function (event) {
            mainTextClick(mainText, naturals.checked, flats.checked, sharps.checked, major.checked, minor.checked, dominantSeventh.checked, minorSeventh.checked);
            event.preventDefault();
        };
    }
    exports.main = main;
});
//# sourceMappingURL=compiled.js.map