(ns text-game.render
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [hiccups.runtime :as hiccupsrt]))

(defn render-region 
  "Take in a region map, which contains the width and height of a region, its offset, and the contained text.
  Emit a sequence of maps for each character in the sequence, decorated with its x, y location in the console."
  
  [{:keys [width height x y text fill-char]}]
 
  (for [w (range width)
        h (range height)]

    (let [c (nth text (+ w (* width h)))
          dx (+ x w)
          dy (+ y h)]

      (if c
        {:char c :x dx :y dy}
        {:char fill-char :x dx :y dy}))))

(defn render-page 
  "Needs to have a full page of characters to render - 80 x 25."

  [characters]

  (let [sorted-chars (sort-by (juxt :y :x) characters)]
    (html 
      (map 
        (fn [c] [:div.char-box {:x (:x c) :y (:y c)} (:char c)]) 
       sorted-chars))))
