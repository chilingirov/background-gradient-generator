console.log("The program is running!")


//Model of the web application
var Model = (function() {
    var data = {
        colorOne: "#ff0000",
        colorTwo: "#00ffff",
        message: ""
    }
    return {
        setColorOne: function(color) {
            data.colorOne = color;
        },
        setColorTwo: function(color) {
            data.colorTwo = color;
        },
        setMessage: function() {
            data.message = "background: linear-gradient( to right, " + data.colorOne + ", " + data.colorTwo + ");";
        },
        getColorOne: function() {
            return data.colorOne;
        },
        getColorTwo: function() {
            return data.colorTwo;
        },
        getMessage: function() {
            return data.message;
        }
    }
})();

//The view of the application
var View = (function() {
    viewData = {
        body: document.querySelector("#body"),
        colorOneInput: document.querySelector(".colorOne"),
        colorTwoInput: document.querySelector(".colorTwo"),
        messageText: document.querySelector(".message")
    }
    return {
        setColorOne: function(color) {
            viewData.colorOneInput.value = color;
        },
        setColorTwo: function(color) {
            viewData.colorTwoInput.value = color;
        },
        setMessage: function(message) {
            viewData.messageText.innerHTML = message;
        },
        setBodyGradient(color1, color2) {
            viewData.body.style.background = "linear-gradient(to right," + color1 + "," + color2 + ")";
            console.log(viewData.body.style.background);
        },
        getColorOne: function() {
            return viewData.colorOneInput;
        },
        getcolorTwo: function() {
            return viewData.colorTwoInput;
        },
        getMessage: function() {
            return viewData.messageText;
        },
        getBody: function() {
            return viewData.body;
        }
    }


})();

//The controller of the applicattion
var Controller = (function(model, view) {
    //Get the elements from the view
    var colorOne = view.getColorOne();
    var colorTwo = view.getcolorTwo();
    var screenMessage = view.getMessage();



    colorOne.addEventListener("input", function() {
        model.setColorOne(colorOne.value);
        model.setMessage();
        view.setMessage(model.getMessage());
        view.setBodyGradient(model.getColorOne(), model.getColorTwo());

    });
    colorTwo.addEventListener("input", function() {
        model.setColorTwo(colorTwo.value);
        model.setMessage();
        view.setMessage(model.getMessage());
        view.setBodyGradient(model.getColorOne(), model.getColorTwo());
    });


})(Model, View)