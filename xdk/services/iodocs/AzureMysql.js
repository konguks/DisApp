(function (credentials, helpers) {
  var exports = {};
  
  exports.default = function(params) {
    var url = 'http://localhost:5104/api/Login';
    url = url + '?' + $.param(params);
    return $.ajax({url: url, type: 'GET'});
  };
  
  /* OAuth Functions */ 
  
  return exports;
})