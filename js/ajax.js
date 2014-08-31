</pre>
<script type="text/javascript">
 var mainClickHandler = function() {
 
$.getJSON ('request.php?provider=' + providerName + '' + '&amnt=5', function (json) {
$.each (json.movies, function (i,TheMovie){
 
//handlebars
var src = $('#centerContainer-template').html(),
template = Handlebars.compile(src),
data = template(json),
html = $('#centerContainer').hide().html(data).fadeIn(700);
 
});
})
 }

