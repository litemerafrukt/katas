(ns bob
  (:require [clojure.string :as s]))

(defn silence? [s]
  (= "" (s/trim s)))

(defn yelling? [s]
  (and
    (= s (s/upper-case s))
    (not= s (s/lower-case s))))

(defn question? [s]
  (s/ends-with? s "?"))

(def forceful-question? (every-pred yelling? question?))

(defn response-for [s]
  (cond
    (silence? s) "Fine. Be that way!"
    (forceful-question? s) "Calm down, I know what I'm doing!"
    (yelling? s) "Whoa, chill out!"
    (question? s) "Sure."
    :else "Whatever."))
