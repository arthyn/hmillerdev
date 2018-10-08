document.addEventListener('DOMContentLoaded', function(){
  if (!getCookie("fonts-loaded")) {
    console.log('loading fonts');
    loadFonts();
  }

  function loadFonts() {
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
        setCookie("fonts-loaded", "true", 30);
      }, e => console.log(e)).catch(e => console.log(e));
  }


  function setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
	}
});