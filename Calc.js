;(function(global, $) {

    // 'new' an object
    var Calc = function() {
       return new Calc.init(arguments);
    }

    // hidden within the scope of the IIFE and never directly accessible
    var supportedLangs = ['en', 'es'];

    // informal greetings
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    // formal greetings
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    // logger messages
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };

    // prototype holds methods (to save memory space)
    Calc.prototype = {

        // 'this' refers to the calling object at execution time
        add: function() {
            var x = this.addArray();
            var len = this.z.length;
            for (var i = 0; i < len; i++) {
                x += this.z[i];
                console.log('in for loop ' + x);
            }
            this.z = x;
            console.log('outer ' + x);
            return this;
        },

        addArray: function() {
            var arr = this.z;
            var total = arr[0];
            for (var i = 1; i < arr.length; i++) {
                total += arr[i];
            }
            return total;
        },

        subtractArray: function() {
            var arr = this.z;
            var total = arr[0];
            for (var i = 1; i < arr.length; i++) {
                total -= arr[i];
            }
            return total;
        },

        multiply: function() {
            return this.a * this.b;
        },

        divide: function() {
            var quotient = this.a / this.b;
            if (isNaN(quotient)) {
                throw "Zero divided by Zero is not allowed."
            }
            else if (!isFinite(quotient)) {
                throw "Do not divide by 0.";
            }
            else {
                return quotient;
            }
        },


        argsToArray: function(arguments) {
            var args = new Array(arguments.length);
            for (var i = 0; i < args.length; i++) {
                args[i] = arguments[i];
            }
            // console.log('argsToArray log: ' + args);
            return args;
        },

        validate: function() {
            // check that is a valid language
            // references the externally inaccessible 'supportedLangs' within the closure
             if (supportedLangs.indexOf(this.language)  === -1) {
                throw "Invalid language";
             }
        },





        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },



        // chainable methods return their own containing object
        greet: function(formal) {
            var msg;

            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            // make chainable
            return this;
        },

        setLang: function(lang) {

            // set the language
            this.language = lang;

            // validate
            this.validate();

            // make chainable
            return this;
        },

        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }

            if (!selector) {
                throw 'Missing jQuery selector';
            }

            // determine the message
            var msg;
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            // inject the message in the chosen place in the DOM
            $(selector).html(msg);

            // make chainable
            return this;
        }

    };

    // the actual object is created here, allowing us to 'new' an object without calling 'new'
    Calc.init = function(arguments) {

        var self = this;
        // self.a = a || '';
        // self.b = b || '';
       // self.operation = operation || 'add';

        // self.validate();

        self.z = self.argsToArray(arguments);

    }

    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    Calc.init.prototype = Calc.prototype;

    // attach our Greetr to the global object, and provide a shorthand '$G' for ease our poor fingers
    global.Calc = global.C$ = Calc;

}(window, jQuery));