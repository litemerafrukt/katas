(ns hamming)

(defn same-lenght? [s1 s2]
  (= (count s1) (count s2)))

(defn distance [strand1 strand2]
  (when (same-lenght? strand1 strand2)
    (->> (map not= strand1 strand2)
      (filter true?)
      (count))))
