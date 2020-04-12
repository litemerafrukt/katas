(ns armstrong-numbers)

(defn pow [base exponent]
  (->> (repeat exponent base)
    (reduce *)))

(defn digits [number]
  (->> number
       (iterate #(quot % 10))
       (take-while pos?)
       (map #(mod % 10))
       (reverse)))

(defn armstrong? [number]
  (let [digits (digits number)
        number-of-digits (count digits)
        sum-of-raised (->> digits
                       (map #(pow % number-of-digits))
                       (reduce +))]
    (= number sum-of-raised)))
