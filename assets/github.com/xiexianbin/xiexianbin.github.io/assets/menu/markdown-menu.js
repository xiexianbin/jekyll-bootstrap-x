/*!
 * xiexianbin markdown-menu.js
 * Copyright 2017 me@xiexianbin.cn, Per.
 * https://github.com/xiexianbin/markdown-menu
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 */

'use strict';

var threeBarSvg = '<svg height="16" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.41 9H0.59c-0.59 0-0.59-0.41-0.59-1s0-1 0.59-1h10.81c0.59 0 0.59 0.41 0.59 1s0 1-0.59 1z m0-4H0.59c-0.59 0-0.59-0.41-0.59-1s0-1 0.59-1h10.81c0.59 0 0.59 0.41 0.59 1s0 1-0.59 1zM0.59 11h10.81c0.59 0 0.59 0.41 0.59 1s0 1-0.59 1H0.59c-0.59 0-0.59-0.41-0.59-1s0-1 0.59-1z" /></svg>';

var getLinks = function() {
  var header, tag, headerLevelStr, depth;
  // var headers = document.querySelectorAll('article.markdown-body h1, article.markdown-body h2, article.markdown-body h3, article.markdown-body h4, article.markdown-body h5, article.markdown-body h6');
  var headers = document.querySelectorAll('article.markdown-body h1, article.markdown-body h2, article.markdown-body h3');
  var links = [];

  alert(headers);

  for (var i = 0; i < headers.length; ++i) {
    header = headers[i];
    tag = header.tagName;
    headerLevelStr = tag.substring(1);
    depth = Number.parseInt(headerLevelStr);

    links.push({
      text: header.innerText,
      // hash: header.children[0].hash,
      depth: depth
    });
  }

  return links;
};

var openList = function(depth) {
  var html = '';

  while (depth--) {
    html += '<li><ul class="nav">';
  }

  return html;
};

var closeList = function(depth) {
  var html = '';

  while (depth--) {
    html += '</ul></li>';
  }

  return html;
};

var buildContents = function(links) {
  var node;
  var contents = '<ul>';
  var currentDepth = 1;

  for (var i = 0; i < links.length; ++i) {
    node = links[i];

    if (node.depth > currentDepth) {
      contents += openList(node.depth - currentDepth);
    } else if (node.depth < currentDepth) {
      contents += closeList(currentDepth - node.depth);
    }

    currentDepth = node.depth;

    contents += '<li><a href="' + node.hash + '">' + node.text + '</a></li>';
  }

  while (currentDepth--) {
    contents += '</ul>';
  }

  contents += '<a class="back-to-top" href="#top">To Top</a>';
  return contents;
};

var insertContents = function(contents) {
  var fileView = false;
  var navMenuTarget = document.querySelectorAll('#blog_nav_menu')[0];
  var markdownTarget;

  if (!navMenuTarget) {
    markdownTarget = document.querySelectorAll('.bs-docs-sidebar')[0];
  }

  if (!navMenuTarget && !markdownTarget) {
    alert(0);
    return false;
  }

  // var link = '<span class="github-markdown-contents select-menu js-menu-container js-select-menu"><span class="github-markdown-contents-btn js-select-menu js-menu-target btn btn-sm tooltipped-s' + (markdownTarget ? '' : ' right') + '" role="button" aria-label="Show Table of Contents">' + threeBarSvg + '</span><div class="select-menu-modal-holder github-markdown-contents-modal-holder js-menu-content js-navigation-container"><div id="github-markdown-contents-container" class="select-menu-modal">' + contents + '</div></div></span>';
  var link = '<span class="help-block"> 目录 </span>' + contents;

  alert(contents);

  (navMenuTarget || markdownTarget).innerHTML += link;
};

var links = getLinks();

if (links.length) {
  var contents = buildContents(links);
  insertContents(contents);
}
