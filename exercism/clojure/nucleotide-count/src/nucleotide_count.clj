(ns nucleotide-count
  (:require [clojure.core :as core]))

(def nucleotides [\A \T \C \G])

(defn nucleotide? [nucleotide]
  (.contains nucleotides nucleotide))

(defn count [nucleotide strand]
  {:pre [(nucleotide? nucleotide)]}
  (->> strand
       (filter #(= % nucleotide))
       (core/count)))

(defn nucleotide-counts [strand]
  {\A (count \A strand)
   \T (count \T strand)
   \C (count \C strand)
   \G (count \G strand)})
