(function( window, undefined ) {
    // define your functions

    var mnApp = [];

    mnApp.headerTest = function () {
        alert('Header Test works');
    }

    mnApp.otherTestFunction = function () {
        $('#test2').html('jQuery Works inside mnApp variable');
    }

    window.mnApp = mnApp;

})(window);
