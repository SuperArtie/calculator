'use strict';

/* global describe, it */

var expect = require('chai').expect;

var Calc = require('../../app/models/calc');

describe('Calc', function(){
  describe('.add', function(){
    it('should add two numbers', function(){
      var sum = Calc.add(2, 3);
      expect(sum).to.equal(5);
    });
  });
  describe('.sub', function(){
    it('should subtract two numbers', function(){
      var diff = Calc.sub(5, 3);
      expect(diff).to.equal(2);
    });
  });
  describe('.dist',function(){
    it('should find distance between two points', function(){
      var point1 = {x:2,y:4};
      var point2 = {x:14,y:9};
      var distance = Calc.dist(point1,point2);

      expect(distance).to.equal(13);
    });
  });
  describe('.line',function(){
    it('should find between two points', function(){
     //expect(Calc.line({x:3,y:4}, {x:7,y:12})).to.equal('2.0x - 2.0');
     //expect(Calc.line({x:3,y:14}, {x:7,y:12})).to.be.equal('-0.5x - 2.0');
      
      var point1 = {x:2,y:4};
      var point2 = {x:14,y:9};
      var line  = Calc.line(point1,point2);

      expect(line).to.have.string('0.4x + 3.2');

      point1 = {x:3,y:6};
      point2 = {x:4,y:9};
      line  = Calc.line(point1,point2);

      expect(line).to.have.string('3x + -3');
      
    });
  });
  describe('.trip', function(){
    it('should find total distance of trip', function(){
      var p1 = {x:1,y:3};
      var p2 = {x:4,y:3};
      var p3 = {x:5,y:5};
      var p4 = {x:7,y:4};
      var p5 = {x:8,y:8};
      var p6 = {x:10,y:6};
      var p7 = {x:11,y:10};
      
      var points = [p1,p2,p3,p4,p5,p6,p7];
      var trip = Calc.trip(points);
      console.log(trip);
      expect(trip).to.be.within(18,19);

    });
  });
  describe('.mean', function(){
    it('should find the average of a set of numbers', function(){
      var numbers = [4, 2, 6, 11, 1, 12];
      var avg = Calc.mean(numbers);

      expect(avg).to.equal(6);
    });
  });
});
