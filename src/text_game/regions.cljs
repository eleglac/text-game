(ns text-game.regions
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [text-game.render :refer [render-region render-page]]))

(def instruction-region
  {:width 25 :height 25 :x 55 :y 0 :fill-char "-" :text "This is an illustration of the instruction region."})

(def view-region
  {:width 55 :height 22 :x 0 :y 0 :fill-char "." :text "This is an illustration of the view region."})

(def input-region
  {:width 55 :height 3 :x 0 :y 22 :fill-char "*" :text "This is an illustration of the input region."})

(def test-page 
  (html (render-page (flatten 
    [(render-region instruction-region)
     (render-region view-region)
     (render-region input-region)]))))
