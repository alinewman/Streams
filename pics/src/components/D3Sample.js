import React from 'react';
import * as d3 from "d3";

var ali = [20, 40, 50, 60];

var width = 500;
var height = 500;

var widthscale = d3.scaleLinear().domain([0, 60]).range([0, width]);

var color = d3.scaleLinear()
.domain([d3.min(ali), d3.max(ali)])
    .range(["red", "blue"]);


var axis = d3.axisBottom()
    .ticks(5)
    .scale(widthscale);

var canvas = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height",height)
    .append("g")
    .attr("transform", "translate(20, 0)");


var bars = canvas.selectAll("rect")
    .data(ali)
    .enter()
        .append("rect")
        .attr("width", function(d){
            return widthscale(d);
        })
        .attr("height", 50)
        .attr("fill", function(d){ return color(d);})
        .attr("y",function(d, i){
            return i * 100 ;
        });


    canvas.append("g")
        .attr("transform", "translate(0, 400)")
        .call(axis);

const D3Sample = () => {
    return(
    <div></div>

    )
};

export default D3Sample;