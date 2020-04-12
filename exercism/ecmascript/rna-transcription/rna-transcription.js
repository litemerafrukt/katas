class NucleotidTranscriber {
    static transcibe(n) {
        switch (n) {
            case "G":
                return "C";

            case "C":
                return "G";

            case "T":
                return "A";

            case "A":
                return "U";

            default:
                throw new Error("Invalid input DNA.");
        }
    }
}
export default class Transcriptor {
    toRna(nucleotidString) {
        const rna = Array.from(nucleotidString, NucleotidTranscriber.transcibe);
        return rna.join("");
    }
}
