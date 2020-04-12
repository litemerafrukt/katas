(ns robot-name)

(def alphabeth "ABCDEFGHIJKLMNOPQRSTUVWXYZ")

(def number-of-possible-names (* 26 26 10 10 10))

(defn generate-unique-names []
  (->> (for [l1 alphabeth
             l2 alphabeth
             d1 (range 10)
             d2 (range 10)
             d3 (range 10)]
         (str l1 l2 d1 d2 d3))
    (take number-of-possible-names)
    (into [])
    (shuffle)))

(def names (atom (generate-unique-names)))

(defn reset-name-pool [] (reset! names (generate-unique-names)))

(defn unique-name []
  (let [name (first @names)]
    (reset! names (drop 1 @names))
    name))

(defn robot []
  (atom {:name (unique-name)}))

(defn robot-name [robot]
  (:name @robot))

(defn reset-name [robot]
  (reset! robot {:name (unique-name)}))
