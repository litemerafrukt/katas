(ns flatten-array)

(def not-sequential? (complement sequential?))

(defn flatten [v]
  (cond
    (nil? v) []
    (not-sequential? v) [v]
    (empty? v) []
    :else (concat (flatten (first v)) (flatten (rest v)))))
