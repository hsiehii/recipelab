$(document).ready(function() {

    // GET A LIST (RECIPE) FROM SERVER AS HTML (SOONDUBU)
    $('#korea').click(function(e) {
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-korea",
            dataType: "html",
            type: "GET",
            data: {format: "korea-list"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#content").html(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    // GET A LIST (RECIPE) FROM SERVER AS HTML (CARBONARA)
    $('#italy').click(function(e) {
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-italy",
            dataType: "html",
            type: "GET",
            data: { format: "italy-list"}
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#content").html(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
        }
    });
    });


    // GET A LIST (RECIPE) FROM SERVER AS JSON (SUSHI)
    $('#japan').click(function(e) {
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-japan",
            dataType: "json",
            type: "GET",
            data: { format: "japan-list"}
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#content");
                let htmlStr = "<ul>";
                for(let i = 0; i < data.length; i++) {
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
    });
    });

    // GET A LIST (RECIPE) FROM SERVER AS JSON (BEEF NOODLE)
    $('#taiwan').click(function(e) {
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-taiwan",
            dataType: "json",
            type: "GET",
            data: { format: "taiwan-list"}
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                var div = $("#content");
                let htmlStr = "<ul>";
                for(let i = 0; i < data.length; i++) {
                    htmlStr += "<li>" + data[i] + "</li>";
                }
                htmlStr += "</ul>";
                div.html(htmlStr);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

    });

});

});
