(ns text.game.episodes.episode-01
  
  )

(def event-stream
  [{:start-time 0 
    :display-region "view-region"
    :text "This is a big big big block of text.  It's so big that I don't even know how big it is.  It's huge, like space.  Mindblowingingly, bogglingly, inestimably vast and large.  That one dude, Big McLargeHuge, is like a tiny baby next to this block of text.  A red giant star is comparable to the period at the end of this sentence, because this is such a big block of text.  It's so big I'm not even sure it ends!  How can we be?  It's gotta have so many characters!  So many!  Oh wait... it does end - right... here." }
   
   {:start-time 1000
    :display-region "view-region"
    :text "this block is smaller."}

   {:start-time 5000
    :display-region "view-region"
    :text "even smaller!"}

   ]
  )

(def event-stream-2
  {0    "text snip a"
   1000 "text snip b"
   2000 "text snip c"
   5000 "text snip d"
   }
  )
