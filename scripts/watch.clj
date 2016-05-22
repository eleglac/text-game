(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'text-game.core
   :output-to "out/text_game.js"
   :output-dir "out"})
