HTML

<input />





JAVASCRIPT

var array = ["2014-02-14","2014-02-15","2014-02-16"]

$('input').datepicker({
    beforeShowDay: function(date){
        var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
        return [ array.indexOf(string) == -1 ]
    }
});
