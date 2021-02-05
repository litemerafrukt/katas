(ns phone-number)

(defn number [unclean-number]
  (->> (re-seq #"\d" unclean-number)
       (apply str)))

(defn area-code [])

(defn pretty-print [])
