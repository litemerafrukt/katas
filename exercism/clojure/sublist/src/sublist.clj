(ns sublist)

(defn is-sublist? [a b]
  (->> b
       (partition (count a) 1)
       (some (partial = a))))

(defn classify [a b]
  ;; Probably need a cond or something here...
  (when (= a b) :equal)
  (let [a-length (count a) b-length (count b)]
    (if (< a-length b-length)
      (when (is-sublist? a b) :sublist)
      (when (is-sublist? b a) :superlist))))
