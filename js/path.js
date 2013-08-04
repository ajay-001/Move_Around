// JavaScript Document

/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 
var pathObj = {
    "line": {
        "strokepath": [
            {
                "path": "M 30 51 L 76 61",
                "duration": 600
            },
            {
                "path": "M 129 87 L 188 109",
                "duration": 600
            },
            {
                "path": "M 268 155 L 326 201",
                "duration": 600
            },
            {
                "path": "M 375.5 246 L 375.5 296",
                "duration": 600
            },
            {
                "path": "M 420 342 L 485 368",
                "duration": 600
            },
            {
                "path": "M 569 394 L 616 402",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 640,
            "height": 480
        }
    }
}; 
 
 
/* 
 Setup and Paint your lazyline! 
 */ 
 
 $(document).ready(function(){ 
 $("#box2").click(function(){
	$('#line').lazylinepainter( 
	 {
		"svgData": pathObj,
		"strokeWidth": 2,
		"strokeColor": "#e09b99"
	}).lazylinepainter('paint'); 	 
 });
 
 $("#box3").click(function(){
	$('#line').fadeOut(); 	 
 });
 
 });