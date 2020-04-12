(ns grade-school)

(defn add-student [grade name]
  (vec (conj grade name)))

(defn add [school name grade]
  (update school grade add-student name))

(defn grade [school grade]
  (get school grade []))

(defn sort-grade-students [[grade students]]
  {grade (sort students)})

(defn sorted [school]
  (->> school
    (map sort-grade-students)
    (into (sorted-map))))
