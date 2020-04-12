(ns rna-transcription)

(defn translate-nucleotide [nucleotide]
  {:post [(not (nil? %))]}
  ({\G \C, \C \G, \T \A, \A \U} nucleotide))

(defn to-rna [dna]
  (->> dna
    (map translate-nucleotide)
    (apply str)))
