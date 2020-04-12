(ns phone-number
  (:require [clojure.string :as s]))

(defn drop-country-code [number]
  (if (= 11 (count number))
    (s/replace number #"^1" "")
    number))

(defn number [num-string]
  (let [number (->> num-string
                (re-seq #"\d+")
                (apply str)
                (drop-country-code))]
    (if (= (count number) 10)
      number
      "0000000000")))

(defn parts [number]
  (->> number
    (re-matches #"(\d{3})(\d{3})(\d{4})")
    (rest)))

(defn area-code [num-string]
  (->> num-string
    (number)
    (parts)
    (first)))

(defn pretty-print
  ([num-string]
   (->> num-string
     (number)
     (parts)
     (apply pretty-print)))
  ([area-code exchange-code subscriber]
   (format "(%s) %s-%s" area-code exchange-code subscriber)))
