$(document).ready(function(){$("a.filter-docs").click(function(e){e.preventDefault(),$("#writing li:not(.docs), #speaking li:not(.docs), span:not(.docs)").addClass("hidden"),$(".all, span.docs, li.docs").removeClass("hidden")}),$("a.filter-ux").click(function(e){e.preventDefault(),$("#writing li:not(.ux), #speaking li:not(.ux), span:not(.ux)").addClass("hidden"),$(".all, span.ux, li.ux").removeClass("hidden")}),$("a.filter-wireframing").click(function(e){e.preventDefault(),$("#writing li:not(.wireframing), #speaking li:not(.wireframing), span:not(.wireframing)").addClass("hidden"),$(".all, span.wireframing, li.wireframing").removeClass("hidden")}),$("a.filter-remote").click(function(e){e.preventDefault(),$("#writing li:not(.remote), #speaking li:not(.remote), span:not(.remote)").addClass("hidden"),$(".all, span.remote, li.remote").removeClass("hidden")}),$("a.filter-web").click(function(e){e.preventDefault(),$("#writing li:not(.web), #speaking li:not(.web), span:not(.web)").addClass("hidden"),$(".all, span.web, li.web").removeClass("hidden")}),$("a.all").click(function(e){e.preventDefault(),$("#writing li").removeClass("hidden"),$("a.all, #writing span, #speaking span").addClass("hidden")})});
