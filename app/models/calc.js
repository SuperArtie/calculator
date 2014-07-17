'use strict';

function Calc(){}

Calc.add = function(x,y){
  return x + y;
};

Calc.sub = function(x,y){
  return x - y;
};

Calc.dist = function(pt1, pt2){
  /*
    var xs = 0;
    var ys = 0;

    xs = pt2.x-pt1.x;
    xs = xs * xs;
    ys = pt2.y-pt1.y;
    ys = ys * ys;
*/
    var x = Math.pow((pt2.x-pt1.x), 2);
    var y = Math.pow((pt2.y-pt1.y), 2);

    return Math.sqrt( x + y );
};

Calc.line = function(pt1, pt2){
  /*
  var x = pt2.x - pt1.x;
  var y = pt2.y - pt1.y;
  var m = y/x;
  var b = pt1.y - (m*pt1.x);

  var sign = b < 0 ? '-' : '+';
  b = Math.abs(b);

  return m.toFixed(1) + 'x' + sign + b.toFixed(1);
  */

  var slope = Math.round(10*(pt2.y - pt1.y)/(pt2.x - pt1.x))/10;
  var intercept = Math.round(10*(pt1.y - (slope * pt1.x)))/10;
  return slope + 'x + ' + intercept;
 
};

Calc.trip = function(array){
  var total=0;
  for(var i=0; i<(array.length-1); i++)
  {
    total+=this.dist(array[i], array[i+1]);
  }
  return total;
};

Calc.mean = function(array){
  var sum = 0;
  for(var i=0; i < array.length; i++){
    sum += array[i];
  }
    return sum / array.length;
};

Calc.stdev = function(array){
  var diffs= [];
  var mean = Calc.mean(array);
  for(var i=0; i<array.length; i++)
  {
    array[i] -= mean;
    diffs.push(Math.pow(array[i], 2));
  }
  return Math.sqrt(Calc.mean(diffs));
};

module.exports = Calc;

