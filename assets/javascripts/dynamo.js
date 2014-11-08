/**
 * dynamo.js
 * http://prezjordan.github.io/dynamo.js
 *
 * Copyright 2013 Jordan Scales (http://jordanscales.com)
 * Released under the MIT license
 * See LICENSE.txt
 */
!function(a){a.fn.dynamo=function(t){return this.each(function(n,e){t=t||{};var i=a(e);if("true"!==i.data("initialized")){var d=t.delay||parseInt(i.data("delay"),10)||3e3,r=t.speed||parseInt(i.data("speed"),10)||350,c=t.pause||i.data("pause")||!1,l=t.lines||i.data("lines").split(i.data("delimiter")||","),s=t.callback||new Function(i.data("callback"))||function(){},o=t.centered||i.data("center")||!1;i.html(a("<span></span>").html(i.html())).data("initialized","true"),l.forEach(function(t){i.append(a("<span></span>").html(t))}),i.find("span").each(function(t,n){var e=a(n).remove(),d=a("<div></div>").html(e.html());t||d.data("trigger","true"),i.append(d)});var p=i.find(">:first-child").height();i.height(p).css({display:"inline-block",position:"relative",overflow:"hidden","vertical-align":"bottom"}),o&&i.css("text-align","center");var f=function(){i.dynamo_trigger({speed:r,callback:s})};c||setInterval(f,d)}})},a.fn.dynamo_trigger=function(t){return this.each(function(n,e){t=t||{};var i=a(e),d=t.speed||i.data("speed")||350,r=t.callback||new Function(i.data("callback"))||function(){};a(this).data("pause")||i.find("div:first").slideUp(d,function(){i.append(a(this).show()),"true"===i.find("div:first").data("trigger")&&r()})})},a(".dynamo").dynamo()}(jQuery);