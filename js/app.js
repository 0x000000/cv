(function(g, doc) {
  'use strict';

  function calcFullAges() {
    var now = new Date();
    var totalMonths = (now.getFullYear() - 1987) * 12 - 11 + now.getMonth();

    return Math.floor(totalMonths / 12)
  }

  g.App = {
    start: function() {
      doc.querySelector('.x_age').innerHTML = calcFullAges();
    }
  }

})(window, document);