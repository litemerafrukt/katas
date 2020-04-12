(ns protein-translation)

(def codons-protein
  {["AUG"] "Methionine"
   ["UGG"] "Tryptophan"
   ["UUU" "UUC"] "Phenylalanine"
   ["UUA" "UUG"] "Leucine"
   ["UAU" "UAC"] "Tyrosine"
   ["UGU" "UGC"] "Cysteine"
   ["UAA" "UAG" "UGA"] "STOP"
   ["UCU" "UCC" "UCA" "UCG"] "Serine"})


(defn fsecond [s]
  (second (first s)))

(defn partition-string [step string]
  (->> string
    (partition step)
    (map clojure.string/join)))

(defn translate-codon [codon]
  (->> codons-protein
   (filter (fn [[codons]] (some #(= codon %) codons)))
   (fsecond)))

(defn translate-rna [rna-strand]
  (->> rna-strand
    (partition-string 3)
    (map translate-codon)
    (take-while #(not= % "STOP"))))
