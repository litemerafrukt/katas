export default class Transcriptor {
    transcribe(nucleotide: string): string {
        switch (nucleotide) {
            case "G":
                return "C"
            case "C":
                return "G"
            case "T":
                return "A"
            case "A":
                return "U"
            default:
                throw new Error("Invalid input DNA.")
        }
    }

    toRna(dna: string): string {
        return dna
            .split("")
            .map(this.transcribe)
            .join("")
    }
}
