document.addEventListener('DOMContentLoaded', function(){
  var fontFamilies = {
    'halyard-display': [
      {
        weight: 500
      }
    ],
    'halyard-text': [
      {
        weight: 300
      },
      {
        weight: 300,
        style: 'italic'
      },
      {
        weight: 700
      }
    ]
  }

  var fontObservers = [];
  
  Object.keys(fontFamilies).forEach(function(family) {
    fontObservers = fontObservers.concat(fontFamilies[family].map(function(config) {
      return new FontFaceObserver(family, config).load()
    }));
  });
  
  Promise.all(fontObservers)
    .then(function() {
      document.documentElement.classList.add('fonts-loaded');
    }, e => console.log(e)).catch(e => console.log(e));

});