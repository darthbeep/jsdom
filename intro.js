var listplace = 0;
var fibnum = 1;

var fibonacci = function(n){ //Stolen from previous homework

    if(n < 1){
	return 0;
    }

    var counter = 0;

    var helper = function(first, second){
	if(counter == n-1){
	    return first;
	}

	counter++;
	return helper(second, first+second);
    }

    return helper(1,1)
}

$(document).ready(function() {
    $("#jqbutton").click(function() {
        $("ul").append('<li id=' + listplace + '>JQuery</li>');
        listplace++;
    });
    $("li").click(function() {
        $(this).hide();
    });
    $("#fibbutton").click(function(event) {
        var f = fibonacci(fibnum);
        fibnum++;
        $("ol").append("<li>" + f + "</li>");
    });
});

var jsbutton = function() { //Obligatory non-jquery even though jquery is just better
    document.getElementById('ulist').innerHTML += "<li id=" + listplace +">JS</li>";
    listplace++;
}

$(document).on('click', function() {
    $("li").click(function() {
        $(this).hide();
    });
});

$(document).on('mouseenter', 'li', function(event) {
    $("h1").text($(this).text());
});
$(document).on('mouseleave', 'li', function() {
    $("h1").text("Hello World!");
});
