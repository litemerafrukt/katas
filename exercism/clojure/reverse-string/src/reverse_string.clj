(ns reverse-string)

(defn reverse-string [s]
  (->> s
    (into ())
    (apply str)))
