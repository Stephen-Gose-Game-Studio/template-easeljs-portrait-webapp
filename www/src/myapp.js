(function() {
    document.addEventListener('DOMContentLoaded', function() {
        // get a reference to the canvas we'll be working with:
        var canvas = document.getElementById("testCanvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // create a stage object to work with the canvas. This is the top level node in the display list:
        var stage = new createjs.Stage(canvas);

        // Create a new Text object:
        var text = new createjs.Text("Hello World!", "36px Arial", "#777");

        // add the text as a child of the stage. This means it will be drawn any time the stage is updated
        // and that its transformations will be relative to the stage coordinates:
        stage.addChild(text);

        // position the text on the center of the screen, relative to the stage coordinates:
        var textbounds = text.getBounds();
        text.x = (canvas.width - textbounds.width)  / 2;
        text.y = (canvas.height - textbounds.height) / 2;

        // call update on the stage to make it render the current display list to the canvas:
        stage.update();
    }, false);
}());