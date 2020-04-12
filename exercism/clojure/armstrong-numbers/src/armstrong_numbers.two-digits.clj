(ns armstrong-numbers
  (:require [clojure.math.numeric-tower :as math]))

(defn digits [number]
  (->> (str number)
    (map #(Character/digit % 10))))

(defn digits' [number]
  (loop [n number digits ()]
    (if (zero? n)
      digits
      (recur (quot n 10) (conj digits (mod n 10))))))

(defn armstrong? [number]
  (let [digits (digits number)
        number-of-digits (count digits)
        sum-of-raised (->> digits
                       (map #(math/expt % number-of-digits))
                       (reduce +))]
    (= number sum-of-raised)))
