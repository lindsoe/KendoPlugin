(function ($) {
 
    var ui = kendo.ui,
            Widget = ui.Widget;
    ui.plugin(Widget.extend({
        init: function (element, options) {
            Widget.fn.init.call(this, element, options);
            //INITIALIZE PARTS
            this.initStyles();
            this.initElements();
            this.initEvents();
            this.initDataSource();
            this.element.on("click", function () {
                this.onclick();
            });
        },
        options: {
            name: "SpinImage",
            enableStyles:false
        },
        /**
   * Create templates for rendering to DOM
   */
        initElements: function () {
            _html = $('<div>Test</div>');
            this.element.append(_html);
            if (this.options.enableStyles) {
                this.element.addClass("myPlugin");

            }
        },

        click: function () {
            alert("Now");
        },
        /**
  * Register CSS style rules
  */
        initStyles: function () {
            //ADD CSS RULES DYNAMICALLY
            var addCssRule = function (styles) {
                var style = document.createElement('style');
                style.type = 'text/css';

                if (style.styleSheet) style.styleSheet.cssText = styles; //IE
                else style.innerHTML = styles; //OTHERS

                document.getElementsByTagName('head')[0].appendChild(style);
            };

            if (this.options.enableStyles) {
                //ADD CSS RULES FOR WIDGET
                addCssRule('.myPlugin { font-style:italic; }');
            }
        },

        /**
           * Bind events
           */
       

        initEvents: function () {

        },

        /**
         * Creates the data source
         */
        initDataSource: function () {

        }

    }));


})(jQuery);