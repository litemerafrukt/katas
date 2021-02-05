(ns leap)

(defn divisible-by? [n div]
  (zero? (mod n div)))

(defn leap-year? [year]
  (or
   (and (divisible-by? year 4) (not (divisible-by? year 100)))
   (divisible-by? year 400)))

