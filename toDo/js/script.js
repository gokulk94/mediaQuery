var simpleExtended = function(base,data) {
    var Extended = function(data) {
        base.call(this, data);
    };

    Extended.prototype = Object.create(base.prototype);
    Extended.prototype.constructor = Extended;

    return Extended;
};

var TodoModel = simpleExtended(Model);
var store = [];
var title;
var c = document.getElementById("clk");
c.addEventListener('click', function() {
    title = $('#text').val();
    var todo = new TodoModel({
        title: title,
        done: false
    });
    store.push(todo);
    console.log(todo);

});
