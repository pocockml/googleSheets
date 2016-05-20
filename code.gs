function nearestNeighbor() {
  //begin with spreadsheet with first column as name, second column address, third column lat, fourth col long
  //use the GeoCode by Awesome Table add on
  
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  for (var i = 1, len = data.length; i < len; i++) {
    var lati  = data[i][2]; 
    var longi = data[i][3];
    //new  to create a new array call array`i' -- don't know how to reference i as the arrayname
    //var arrayi = new array();
    for (var j = 0, len2 = data[0].length; j < len2; j++) {
      var latj  = data[j][2];
      var longj = data[j][3];
      //trying to calculate the cartesian product, a^2+b^2=c^2 -- to get the distance between two points
      // var distanceij = sqrt((lati-latj)^2+(longi-longj)^2);
      //need to save name of person j to arrayi
      //need to save distance to person i to arrayi
      //need to sort arrayi by distance to person i (smallest first) -- sort name on distance
    };
  };
//need write new arrays sequentially as rows to a new sheet
}
