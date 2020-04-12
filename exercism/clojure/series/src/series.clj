(ns series)

(defn slices [string length]
  (if (= length 0)
   (vector "")
   (->> string
     (partition length 1)
     (map #(apply str %)))))
