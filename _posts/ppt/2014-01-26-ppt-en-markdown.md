---
layout : ppt/post
title: reveal.js – The HTML Presentation Framework
description: A framework for easily creating beautiful presentations using HTML
category : ppt
tags: ppt
theme: white
id: 2014012602
---

  <section data-markdown>
    # Reveal.js
    ### The HTML Presentation Framework

    <small>Created by [Hakim El Hattab](http://hakim.se) and [contributors](https://github.com/hakimel/reveal.js/graphs/contributors)</small>
  </section>

  <section data-markdown>
    ## Hello There

    reveal.js enables you to create beautiful interactive slide decks using HTML. This presentation will show you examples of what it can do.
  </section>

  <!-- Example of nested vertical slides -->
  <section>
  <section data-markdown>
      ## Vertical Slides

      Slides can be nested inside of each other.

      Use the `Space` key to navigate through all slides.

      <a href="#" class="navigate-down">
        ![Down arrow](https://s3.amazonaws.com/hakim-static/reveal-js/arrow.png)
      </a>
    </section>

  <section data-markdown>
      ## Basement Level 1

      Nested slides are useful for adding additional detail underneath a high level horizontal slide.
    </section>

  <section data-markdown>
      ## Basement Level 2

      That's it, time to go back up.

      <a href="#" class="navigate-down">
        ![Down arrow](https://s3.amazonaws.com/hakim-static/reveal-js/arrow.png)
      </a>

      <a href="#/2">
        <img width="178" height="238" data-src="https://s3.amazonaws.com/hakim-static/reveal-js/arrow.png" alt="Up arrow" style="transform: rotate(180deg); -webkit-transform: rotate(180deg);">
      </a>
    </section>
  </section>

  <section data-markdown>
    ## Slides

    Not a coder? Not a problem. There's a fully-featured visual editor for authoring these, try it out at [https://slides.com](https://slides.com).
  </section>

  <section data-markdown>
    ## Point of View

    Press <strong>ESC</strong> to enter the slide overview.

    Hold down alt and click on any element to zoom in on it using <a href="http://lab.hakim.se/zoom-js">zoom.js</a>. Alt + click anywhere to zoom back out.
  </section>

  <section data-markdown>
    ## Touch Optimized

    Presentations look great on touch devices, like mobile phones and tablets. Simply swipe through your slides.
  </section>

  <section>
    <script type="text/template">
      ## Markdown support

      Write content using inline or external Markdown.

      Instructions and more info available in the [readme](https://github.com/hakimel/reveal.js#markdown).

      ```
    <section data-markdown>
        ## Markdown support

        Write content using inline or external Markdown.

        Instructions and more info available in the [readme](https://github.com/hakimel/reveal.js#markdown).
      </section>
      ```
    </script>
  </section>

  <section>
    <section id="fragments">
      ## Fragments
      <p>Hit the next arrow...</p>
      <p class="fragment">... to step through ...</p>
      <p><span class="fragment">... a</span> <span class="fragment">fragmented</span> <span class="fragment">slide.</span></p>

      <aside class="notes">
        This slide has fragments which are also stepped through in the notes window.
      </aside>
    </section>

  <section data-markdown>
      ## Fragment Styles

      <p>There's different types of fragments, like:</p>
      <p class="fragment grow">grow</p>
      <p class="fragment shrink">shrink</p>
      <p class="fragment fade-out">fade-out</p>
      <p class="fragment fade-up">fade-up (also down, left and right!)</p>
      <p class="fragment current-visible">current-visible</p>
      <p>Highlight <span class="fragment highlight-red">red</span> <span class="fragment highlight-blue">blue</span> <span class="fragment highlight-green">green</span></p>
    </section>
  </section>

  <section id="transitions">
    ## Transition Styles
    <p>
      You can select from different transitions, like: <br>
      <a href="?transition=none#/transitions">None</a> -
      <a href="?transition=fade#/transitions">Fade</a> -
      <a href="?transition=slide#/transitions">Slide</a> -
      <a href="?transition=convex#/transitions">Convex</a> -
      <a href="?transition=concave#/transitions">Concave</a> -
      <a href="?transition=zoom#/transitions">Zoom</a>
    </p>
  </section>

  <section id="themes">
    ## Themes
    <p>
      reveal.js comes with a few themes built in: <br>
      <!-- Hacks to swap themes after the page has loaded. Not flexible and only intended for the reveal.js demo deck. -->
      <a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/black.css'); return false;">Black (default)</a> -
      <a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/white.css'); return false;">White</a> -
      <a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/league.css'); return false;">League</a> -
      <a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/sky.css'); return false;">Sky</a> -
      <a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/beige.css'); return false;">Beige</a> -
      <a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/simple.css'); return false;">Simple</a> <br>
      <a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/serif.css'); return false;">Serif</a> -
      <a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/blood.css'); return false;">Blood</a> -
      <a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/night.css'); return false;">Night</a> -
      <a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/moon.css'); return false;">Moon</a> -
      <a href="#" onclick="document.getElementById('theme').setAttribute('href','css/theme/solarized.css'); return false;">Solarized</a>
    </p>
  </section>

  <section>
    <section data-background="#dddddd">
      ## Slide Backgrounds
      <p>
        Set <code>data-background="#dddddd"</code> on a slide to change the background color. All CSS color formats are supported.
      </p>
      <a href="#" class="navigate-down">
        <img width="178" height="238" data-src="https://s3.amazonaws.com/hakim-static/reveal-js/arrow.png" alt="Down arrow">
      </a>
    </section>

    <section data-background="https://s3.amazonaws.com/hakim-static/reveal-js/image-placeholder.png">
      ## Image Backgrounds
      <pre><code class="hljs">&lt;section data-background="image.png"&gt;</code></pre>
    </section>

    <section data-background="https://s3.amazonaws.com/hakim-static/reveal-js/image-placeholder.png" data-background-repeat="repeat" data-background-size="100px">
      ## Tiled Backgrounds
      <pre><code class="hljs" style="word-wrap: break-word;">&lt;section data-background="image.png" data-background-repeat="repeat" data-background-size="100px"&gt;</code></pre>
    </section>

    <section data-background-video="https://s3.amazonaws.com/static.slid.es/site/homepage/v1/homepage-video-editor.mp4,https://s3.amazonaws.com/static.slid.es/site/homepage/v1/homepage-video-editor.webm" data-background-color="#000000">
      <div style="background-color: rgba(0, 0, 0, 0.9); color: #fff; padding: 20px;">
        ## Video Backgrounds
        <pre><code class="hljs" style="word-wrap: break-word;">&lt;section data-background-video="video.mp4,video.webm"&gt;</code></pre>
      </div>
    </section>

    <section data-background="http://i.giphy.com/90F8aUepslB84.gif">
      ## ... and GIFs!
    </section>
  </section>

  <section data-transition="slide" data-background="#4d7e65" data-background-transition="zoom">
    ## Background Transitions

    Different background transitions are available via the backgroundTransition option. This one's called "zoom".

    <pre><code class="hljs">Reveal.configure({ backgroundTransition: 'zoom' })</code></pre>
  </section>

  <section data-transition="slide" data-background="#b5533c" data-background-transition="zoom">
    ## Background Transitions

    You can override background transitions per-slide.

    <pre><code class="hljs" style="word-wrap: break-word;">&lt;section data-background-transition="zoom"&gt;</code></pre>
  </section>

  <section>
    ## Pretty Code
    <pre><code class="hljs" data-trim contenteditable>
function linkify( selector ) {
  if( supports3DTransforms ) {

    var nodes = document.querySelectorAll( selector );

    for( var i = 0, len = nodes.length; i &lt; len; i++ ) {
      var node = nodes[i];

      if( !node.className ) {
        node.className += ' roll';
      }
    }
  }
}
    </code></pre>
    <p>Code syntax highlighting courtesy of <a href="http://softwaremaniacs.org/soft/highlight/en/description/">highlight.js</a>.</p>
  </section>

  <section data-markdown>
    ## Marvelous List

    - No order here
    - Or here
    - Or here
    - Or here
  </section>

  <section data-markdown>
    ## Fantastic Ordered List
    <ol>
      <li>One is smaller than...</li>
      <li>Two is smaller than...</li>
      <li>Three!</li>
    </ol>
  </section>

  <section data-markdown>
    ## Tabular Tables
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Value</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Apples</td>
          <td>$1</td>
          <td>7</td>
        </tr>
        <tr>
          <td>Lemonade</td>
          <td>$2</td>
          <td>18</td>
        </tr>
        <tr>
          <td>Bread</td>
          <td>$3</td>
          <td>2</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section data-markdown>
    ## Clever Quotes
    <p>
      These guys come in two forms, inline: <q cite="http://searchservervirtualization.techtarget.com/definition/Our-Favorite-Technology-Quotations">The nice thing about standards is that there are so many to choose from</q> and block:
    </p>
    <blockquote cite="http://searchservervirtualization.techtarget.com/definition/Our-Favorite-Technology-Quotations">
      &ldquo;For years there has been a theory that millions of monkeys typing at random on millions of typewriters would
      reproduce the entire works of Shakespeare. The Internet has proven this theory to be untrue.&rdquo;
    </blockquote>
  </section>

  <section data-markdown>
    ## Intergalactic Interconnections
    <p>
      You can link between slides internally,
      <a href="#/2/3">like this</a>.
    </p>
  </section>

  <section data-markdown>
    ## Speaker View

    There's a [speaker view](https://github.com/hakimel/reveal.js#speaker-notes). It includes a timer, preview of the upcoming slide as well as your speaker notes.

    Press the <em>S</em> key to try it out.

    <aside class="notes">
      Oh hey, these are some notes. They'll be hidden in your presentation, but you can see them if you open the speaker notes window (hit 's' on your keyboard).
    </aside>
  </section>

  <section data-markdown>
    ## Export to PDF

    Presentations can be [exported to PDF](https://github.com/hakimel/reveal.js#pdf-export), here's an example:

    <iframe data-src="https://www.slideshare.net/slideshow/embed_code/42840540" width="445" height="355" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:3px solid #666; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>
  </section>

  <section data-markdown>
    ## Global State

    Set `data-state="something"` on a slide and `"something"`
    will be added as a class to the document element when the slide is open. This lets you
    apply broader style changes, like switching the page background.
  </section>

  <section data-state="customevent">
    ## State Events
    <p>
      Additionally custom events can be triggered on a per slide basis by binding to the <code>data-state</code> name.
    </p>
    <pre><code class="javascript" data-trim contenteditable style="font-size: 18px;">
Reveal.addEventListener( 'customevent', function() {
  console.log( '"customevent" has fired' );
} );
    </code></pre>
  </section>

  <section data-markdown>
    ## Take a Moment

    Press B or . on your keyboard to pause the presentation. This is helpful when you're on stage and want to take distracting slides off the screen.
  </section>

  <section data-markdown>
    ## Much more
    <ul>
      <li>Right-to-left support</li>
      <li><a href="https://github.com/hakimel/reveal.js#api">Extensive JavaScript API</a></li>
      <li><a href="https://github.com/hakimel/reveal.js#auto-sliding">Auto-progression</a></li>
      <li><a href="https://github.com/hakimel/reveal.js#parallax-background">Parallax backgrounds</a></li>
      <li><a href="https://github.com/hakimel/reveal.js#keyboard-bindings">Custom keyboard bindings</a></li>
    </ul>
  </section>

  <section data-markdown style="text-align: left;">
    # THE END

    - [Try the online editor](https://slides.com)
    - [Source code &amp; documentation](https://github.com/hakimel/reveal.js)
  </section>

