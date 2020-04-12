(ns run-length-encoding)

(defn compress-chars [chars]
  (let [length (count chars)
        chr (first chars)]
    (if (= 1 length)
      [chr]
      [length chr])))

(defn run-length-encode
  "encodes a string with run-length-encoding"
  [plain-text]
  (->> plain-text
       (partition-by identity)
       (mapcat compress-chars)
       (apply str)))

(defn decompress-chars [[_ length char]]
  (if (empty? length)
    (seq char)
    (repeat (Integer. length) char)))

(defn run-length-decode
  "decodes a run-length-encoded string"
  [cipher-text]
  (->> cipher-text
       (re-seq #"(\d*)(.)")
       (mapcat decompress-chars)
       (apply str)))
