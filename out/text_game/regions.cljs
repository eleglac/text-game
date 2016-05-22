(ns text-game.regions
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [text-game.render :refer [render-region render-page]]))

(def regions 
  [{:id "instruction-region"  :width 23 :height 22 :x 57 :y 0  :fill-char "." :text "This is an illustration of the instruction region."}
   {:id "view-region"         :width 56 :height 22 :x 0  :y 0  :fill-char "." :text "This is an illustration of the view region."} 
   {:id "view-margin-right"   :width 1  :height 22 :x 56 :y 0  :fill-char "|" :text nil}
   {:id "input-margin-top"    :width 80 :height 1  :x 0  :y 22 :fill-char "_" :text nil} 
   {:id "input-region"        :width 80 :height 1  :x 0  :y 23 :fill-char "." :text "This is an illustration of the input region."}
   {:id "input-margin-bottom" :width 80 :height 1  :x 0  :y 24 :fill-char "." :text nil}])

(def test-page
  (->> (map render-region regions)
       (flatten)
       (render-page)
       (html)))
