(ns text-game.core
  (:require [clojure.browser.repl :as repl]

            [text-game.regions :refer [test-page]]

            ))

;; (defonce conn
;;   (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(def console-div (.getElementById js/document "console"))

(set! (. console-div -innerHTML) test-page)
