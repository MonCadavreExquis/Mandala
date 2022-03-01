let sketchCells = function (p) {
  
  let img; 
  let tImage;



  let imagesChosen = false;

  let angle0;
  let angle1;

  let angle2;
  let angle3;

  let turnInner0 = 1;
  let turnInner1 = 1;

  let turnFirst0 = 1;
  let turnFirst1 = 1;

  let turnSecond0 = 1;
  let turnSecond1 = 1;

  let turnPlume0 = 1;
  let turnPlume1 = 1;

  let turnPointe = 1;

  let sinAngle0 = 0.5;
  let sinAngle1 = 0.3;
  let sinAngle2 = 0.4;

  let sinFirst = 1;
  let sinPointe = 1;
  let sinSecond = 1;

  let inner0;
  let inner1;

  let first0;
  let first1;

  let second0;
  let second1;

  let plume0;
  let plume1;

  let pointe;

  let inner0Col;
  let inner1Col;

  let first0Col;
  let first1Col;

  let second0Col;
  let second1Col;

  let plume0Col;
  let plume1Col;

  let pointeCol;

  let ani = false;
  
  let psy = false;



  let angleNumbers = [20, 24, 30, 36, 40, 45, 60, 72, 90];
  let angleOtherNumbers = [8, 9, 10, 12, 15, 18, 20, 24, 30];
  

  let button;
  let buttonAnimation;
  let buttonCouleursPsy;

  
  let counter = 0;
  let loading = true;
  let totalImages = 42;

  let cells = [];
  let glandes = [];
  let larmes = [];
  let ovales = [];
  let plumes = [];
  let pointes = [];
  let ronds = [];
  let stars = [];
  
  let can;

  let myFont;
  
   function cellsImagesLoading(filename) {
    p.loadImage(filename, cellsImageLoaded);

    function cellsImageLoaded(image) {
      cells.push(image);

      counter++;
      if (counter == totalImages) {
        loading = false;
      }
    }
  }

    function glandesImagesLoading(filename) {
    p.loadImage(filename, glandesImageLoaded);

    function glandesImageLoaded(image) {
      glandes.push(image);

      counter++;
      if (counter == totalImages) {
        loading = false;
      }
    }
  }

  function larmesImagesLoading(filename) {
    p.loadImage(filename, larmesImageLoaded);

    function larmesImageLoaded(image) {
      larmes.push(image);

      counter++;
      if (counter == totalImages) {
        loading = false;
      }
    }
  }

  function ovalesImagesLoading(filename) {
    p.loadImage(filename, ovalesImageLoaded);

    function ovalesImageLoaded(image) {
      ovales.push(image);

      counter++;
      if (counter == totalImages) {
        loading = false;
      }
    }
  }

  function plumesImagesLoading(filename) {
    p.loadImage(filename, plumesImageLoaded);

    function plumesImageLoaded(image) {
      plumes.push(image);

      counter++;
      if (counter == totalImages) {
        loading = false;
      }
    }
  }

  function pointesImagesLoading(filename) {
    p.loadImage(filename, pointesImageLoaded);

    function pointesImageLoaded(image) {
      pointes.push(image);

      counter++;
      if (counter == totalImages) {
        loading = false;
      }
    }
  }
  
  function rondsImagesLoading(filename) {
    p.loadImage(filename, rondsImageLoaded);

    function rondsImageLoaded(image) {
      ronds.push(image);

      counter++;
      if (counter == totalImages) {
        loading = false;
      }
    }
  }

  function starsImagesLoading(filename) {
    p.loadImage(filename, starsImageLoaded);

    function starsImageLoaded(image) {
      stars.push(image);

      counter++;
      if (counter == totalImages) {
        loading = false;
      }
    }
  }

p.setup = function() {
  myFont = p.loadFont("font/SpaceMono-Bold.ttf")
  p.imageMode(p.CENTER);
  p.pixelDensity(1);


  button = p.createButton("Générer une animation");
  button.position(p.windowWidth*0.43,p.windowHeight*0.5);
  button.size(p.windowWidth*0.15,p.windowWidth*0.02);
  button.mousePressed(p.chooseImages);
  button.style("font-family", "Space Mono");
  button.style("background-color", "#B4B0A0");
  button.style("color", "#3F125E");  
  button.style('font-size', p.windowWidth*0.009 + 'px');
  button.hide();

  buttonAnimation = p.createButton("Plus d'animation");
  buttonAnimation.position(p.windowWidth*0.1,0);
  buttonAnimation.size(p.windowWidth*0.17,p.windowWidth*0.02);
  buttonAnimation.mousePressed(p.changeAnimation);
  buttonAnimation.style("font-family", "Space Mono");
  buttonAnimation.style("background-color", "#B4B0A0");
  buttonAnimation.style("color", "#3F125E");  
  buttonAnimation.style('font-size', p.windowWidth*0.009 + 'px');
  buttonAnimation.hide();

  buttonCouleursPsy = p.createButton("Couleurs psychédéliques");
  buttonCouleursPsy.position(p.windowWidth*0.7,0);
  buttonCouleursPsy.size(p.windowWidth*0.17,p.windowWidth*0.02);
  buttonCouleursPsy.mousePressed(p.changeColors);
  buttonCouleursPsy.style("font-family", "Space Mono");
  buttonCouleursPsy.style("background-color", "#B4B0A0");
  buttonCouleursPsy.style("color", "#3F125E");  
  buttonCouleursPsy.style('font-size', p.windowWidth*0.009 + 'px');
  buttonCouleursPsy.hide();
  
  //IMAGES  

    //CELLS
     cellsImagesLoading("images/cell0.png");
     cellsImagesLoading("images/cell1.png");
     cellsImagesLoading("images/cell2.png");
     cellsImagesLoading("images/cell3.png");
     cellsImagesLoading("images/cell4.png");
     cellsImagesLoading("images/cell5.png");
     cellsImagesLoading("images/cell6.png");
     cellsImagesLoading("images/cell7.png");
     cellsImagesLoading("images/cell8.png");
  
    //GLANDES
      glandesImagesLoading("images/gland0.png");
      glandesImagesLoading("images/gland1.png");
      glandesImagesLoading("images/gland2.png");

    //LARMES
      larmesImagesLoading("images/larme0.png");
      larmesImagesLoading("images/larme1.png");

    //OVALES
      ovalesImagesLoading("images/ovale0.png");
      ovalesImagesLoading("images/ovale1.png");
      ovalesImagesLoading("images/ovale2.png");
      ovalesImagesLoading("images/ovale3.png");
      ovalesImagesLoading("images/ovale4.png");
      ovalesImagesLoading("images/ovale5.png");
      ovalesImagesLoading("images/ovale6.png");
      ovalesImagesLoading("images/ovale7.png");
      ovalesImagesLoading("images/ovale8.png");

    //PLUMES
      plumesImagesLoading("images/plume0.png");
      plumesImagesLoading("images/plume1.png");
      plumesImagesLoading("images/plume2.png");
      plumesImagesLoading("images/plume3.png");
      plumesImagesLoading("images/plume4.png");
      plumesImagesLoading("images/plume5.png");
      plumesImagesLoading("images/plume6.png");
      plumesImagesLoading("images/plume7.png");

    //POINTES
      pointesImagesLoading("images/pointe0.png");
      pointesImagesLoading("images/pointe1.png");
      pointesImagesLoading("images/pointe2.png");
      pointesImagesLoading("images/pointe3.png");
     
    //RONDS
      rondsImagesLoading("images/rond0.png");
      rondsImagesLoading("images/rond1.png");
      rondsImagesLoading("images/rond2.png");
      rondsImagesLoading("images/rond3.png");
      rondsImagesLoading("images/rond4.png");

    //STARS
      starsImagesLoading("images/star0.png");
      starsImagesLoading("images/star1.png");



  
  //CANVAS
  can = p.createCanvas(p.windowWidth, p.windowHeight);
  can.position(0,0);

  //MODES
  p.angleMode(p.DEGREES);
}

p.draw = function() {
   
    if (loading) {
      p.background(0);
      p.stroke(255);
      p.noFill();
      p.rect(p.windowWidth/2-100, p.windowHeight/2-10, 200, 20);

      p.noStroke();
      p.fill(255);
      var w = (200 * counter) / totalImages;
      p.rect(p.windowWidth/2-100, p.windowHeight/2-10, w, 20);
     
    } else {
       p.background(0);
       button.show();
       
       

      if(imagesChosen){
        button.html("Nouvelle combinaison");
        buttonAnimation.show();
        buttonCouleursPsy.show();
        button.position(p.windowWidth*0.43,0);

        if(ani){
        sinFirst = p.sin(sinAngle0)*1.8;
        sinPointe = p.sin(sinAngle1)*1.4;
        sinSecond = p.sin(sinAngle2)*1.8;
      }

        //POINTE
      p.push();
      p.translate(p.windowWidth*0.5,p.windowHeight*0.5);
      p.rotate(turnPointe);
      for (let i = 0 ; i<360/angle3;i++){
        if(psy){
        p.image(pointeCol,p.windowHeight*0.27*sinPointe,p.windowHeight*0.08,p.windowHeight*0.07,p.windowHeight*0.07)
        }else{
        p.image(pointe,p.windowHeight*0.27*sinPointe,p.windowHeight*0.08,p.windowHeight*0.07,p.windowHeight*0.07)
        }
        p.rotate(angle3);
      }
      p.pop();


        //SECOND0
      p.push();
      p.translate(p.windowWidth*0.5,p.windowHeight*0.5);
      p.rotate(turnSecond0);
      for (let i = 0 ; i<360/angle2;i++){
         if(psy){
        p.image(second0Col,p.windowHeight*0.25,p.windowHeight*0.08,p.windowHeight*0.07,p.windowHeight*0.07)
        }else{
        p.image(second0,p.windowHeight*0.25,p.windowHeight*0.08,p.windowHeight*0.07,p.windowHeight*0.07)

        }
        p.rotate(angle2);
      }
      p.pop();

        //SECOND1
      p.push();
      p.translate(p.windowWidth*0.5,p.windowHeight*0.5);
      p.rotate(turnSecond1);
      for (let i = 0 ; i<360/angle3;i++){
         if(psy){
        p.image(second1Col,p.windowHeight*0.23*sinSecond,p.windowHeight*0.03,p.windowHeight*0.05,p.windowHeight*0.05)
        }else{
        p.image(second1,p.windowHeight*0.23*sinSecond,p.windowHeight*0.03,p.windowHeight*0.05,p.windowHeight*0.05)
        }
        p.rotate(angle3);
      }
      p.pop();

        //PLUME0
      p.push();
      p.translate(p.windowWidth*0.5,p.windowHeight*0.5);
      p.rotate(turnPlume0);
      for (let i = 0 ; i<360/angle2;i++){
         if(psy){
        p.image(plume0Col,0,p.windowHeight*-0.2,p.windowHeight*0.02,p.windowHeight*0.06)
        }else{
        p.image(plume0,0,p.windowHeight*-0.2,p.windowHeight*0.02,p.windowHeight*0.06)
        }
        p.rotate(angle2);
      }
      p.pop();

      //PLUME1
      p.push();
      p.translate(p.windowWidth*0.5,p.windowHeight*0.5);
      p.rotate(turnPlume1);
      for (let i = 0 ; i<360/angle3;i++){
         if(psy){
        p.image(plume1Col,0,p.windowHeight*-0.15,p.windowHeight*0.05,p.windowHeight*0.09)
        }else{
        p.image(plume1,0,p.windowHeight*-0.15,p.windowHeight*0.05,p.windowHeight*0.09)
        }
        p.rotate(angle3);
      }
      p.pop();




      //FIRST0
      p.push();
      p.translate(p.windowWidth*0.5,p.windowHeight*0.5);
      p.rotate(turnFirst0);
      for (let i = 0 ; i<360/angle0;i++){
         if(psy){
        p.image(first0Col,p.windowHeight*0.1,p.windowHeight*0.05,p.windowHeight*0.07,p.windowHeight*0.07)
        }else{
        p.image(first0,p.windowHeight*0.1,p.windowHeight*0.05,p.windowHeight*0.07,p.windowHeight*0.07)
        }
        p.rotate(angle0);
      }
      p.pop();

       //FIRST1
      p.push();
      p.translate(p.windowWidth*0.5,p.windowHeight*0.5);
      p.rotate(turnFirst1);
      for (let i = 0 ; i<360/angle1;i++){
         if(psy){
        p.image(first1Col,p.windowHeight*0.1*sinFirst,p.windowHeight*0.08,p.windowHeight*0.07,p.windowHeight*0.07)
        }else{
        p.image(first1,p.windowHeight*0.1*sinFirst,p.windowHeight*0.08,p.windowHeight*0.07,p.windowHeight*0.07)
        }
        p.rotate(angle1);
      }
      p.pop();



        //INNER0
      p.push();
      p.translate(p.windowWidth*0.5,p.windowHeight*0.5);
      p.rotate(turnInner0);
      for(let i = 0;i<360/angle0;i++){
         if(psy){
         p.image(inner0Col,p.windowHeight*0.05,0,p.windowHeight*0.05,p.windowHeight*0.05)
        }else{
         p.image(inner0,p.windowHeight*0.05,0,p.windowHeight*0.05,p.windowHeight*0.05) 
        }
      p.rotate(angle0);    
      }
      p.pop();


       //INNER1
      p.push();
      p.translate(p.windowWidth*0.5,p.windowHeight*0.5);
      p.rotate(turnInner1);
      for (let i = 0 ; i<360/angle1;i++){
         if(psy){
        p.image(inner1Col,p.windowHeight*0.05,p.windowHeight*0.05,p.windowHeight*0.05,p.windowHeight*0.05)
        }else{
        p.image(inner1,p.windowHeight*0.05,p.windowHeight*0.05,p.windowHeight*0.05,p.windowHeight*0.05)
        }
        p.rotate(angle1);
      }
      p.pop();





      
turnInner0 += 0.1;
turnInner1 -= 0.1;     
turnFirst0 += 0.2;
turnFirst1 -= 0.2;
turnSecond0 += 0.3;
turnSecond1 -= 0.3;
turnPlume0 += 0.1;
turnPlume1 -= 0.1;
turnPointe += 0.2;

if(ani){
sinAngle0 += 0.5;
sinAngle1 -= 0.3;
sinAngle2 +=0.4;
}

}
}
}
  
  p.chooseImages = function(){
     
    //INNER
      rand = p.floor(p.random(ronds.length));

        inner0 = ronds[rand];
        
        ronds.splice(rand, 1);

      rand = p.floor(p.random(ronds.length));

        inner1 = ronds[rand];
        ronds.splice(rand, 1); 



  //FIRST
  rand = p.floor(p.random(cells.length));

        first0 = cells[rand];
        cells.splice(rand, 1);
   rand = p.floor(p.random(cells.length));

        first1 = cells[rand];
        cells.splice(rand, 1);


  //PLUME
  rand = p.floor(p.random(plumes.length));

        plume0 = plumes[rand];
        plumes.splice(rand, 1);
  rand = p.floor(p.random(plumes.length));

        plume1 = plumes[rand];
        plumes.splice(rand, 1);



  //SECOND
    rand = p.floor(p.random(ovales.length));

        second0 = ovales[rand];
        ovales.splice(rand, 1);
    rand = p.floor(p.random(cells.length));

        second1 = cells[rand];
        cells.splice(rand, 1);

  //POINTE
   rand = p.floor(p.random(pointes.length));

        pointe = pointes[rand];
        pointes.splice(rand, 1);



angle0 = p.floor(p.random(angleNumbers));
angle1 = p.floor(p.random(angleNumbers));
angle2 = p.floor(p.random(angleOtherNumbers));
angle3 = p.floor(p.random(angleOtherNumbers));


//COLOR
col0 = [p.random(255),0,p.random(255),p.random(100,255)];
col1 = [0,p.random(255),p.random(255),p.random(100,255)];
col2 = [p.random(255),p.random(255),0,p.random(100,255)];
col3 = [p.random(255),0,p.random(255),p.random(100,255)];
col4 = [0,p.random(255),p.random(255),p.random(100,255)];
col5 = [p.random(255),p.random(255),0,p.random(100,255)];
col6 = [p.random(255),0,p.random(255),p.random(100,255)];
col7 = [0,p.random(255),p.random(255),p.random(100,255)];
col8 = [p.random(255),p.random(255),0,p.random(100,255)];

pointeCol = p.createImage(pointe.width,pointe.height);
pointe.loadPixels();
pointeCol.loadPixels();
 for (var y = 0; y < pointe.height; y++) {
    for (var x = 0; x < pointe.width; x++) {
      var index = (x + y * pointe.width) * 4;

     if (pointe.pixels[index + 3] > 10){
      pointeCol.pixels[index + 0] = col8[0];
      pointeCol.pixels[index + 1] = col8[1];
      pointeCol.pixels[index + 2] = col8[2];
      pointeCol.pixels[index + 3] = 255;
    }
    }
  }
  pointeCol.updatePixels();
  pointeCol.blend(pointe, 0, 0, pointe.width, pointe.height, 0, 0, pointe.width, pointe.height, p.MULTIPLY)
pointeCol.loadPixels();
 for (var y = 0; y < pointe.height; y++) {
    for (var x = 0; x < pointe.width; x++) {
      var index = (x + y * pointe.width) * 4;

     if (pointeCol.pixels[index + 3] > 10){
        pointeCol.pixels[index + 3] = col8[3];
    }
    }
  }
  pointeCol.updatePixels();


inner0Col = p.createImage(inner0.width,inner0.height);
inner0.loadPixels();
inner0Col.loadPixels();
 for (var y = 0; y < inner0.height; y++) {
    for (var x = 0; x < inner0.width; x++) {
      var index = (x + y * inner0.width) * 4;
    
    if (inner0.pixels[index + 3] > 10){
      inner0Col.pixels[index + 0] = col7[0];
      inner0Col.pixels[index + 1] = col7[1];
      inner0Col.pixels[index + 2] = col7[2];
      inner0Col.pixels[index + 3] = 255;
    }
  }
  }
  inner0Col.updatePixels();
  inner0Col.blend(inner0, 0, 0, inner0.width, inner0.height, 0, 0, inner0.width, inner0.height, p.MULTIPLY)
inner0Col.loadPixels();
 for (var y = 0; y < inner0.height; y++) {
    for (var x = 0; x < inner0.width; x++) {
      var index = (x + y * inner0.width) * 4;
    
    if (inner0Col.pixels[index + 3] > 10){
     inner0Col.pixels[index + 3] = col7[3];
    }
  }
  }
  inner0Col.updatePixels();



inner1Col = p.createImage(inner1.width,inner1.height);
inner1.loadPixels();
inner1Col.loadPixels();
 for (var y = 0; y < inner1.height; y++) {
    for (var x = 0; x < inner1.width; x++) {
      var index = (x + y * inner1.width) * 4;
    
    if (inner1.pixels[index + 3] > 10){
      inner1Col.pixels[index + 0] = col6[0];
      inner1Col.pixels[index + 1] = col6[1];
      inner1Col.pixels[index + 2] = col6[2];
      inner1Col.pixels[index + 3] = 255;
    }
  }
  }
  inner1Col.updatePixels();
  inner1Col.blend(inner1, 0, 0, inner1.width, inner1.height, 0, 0, inner1.width, inner1.height, p.MULTIPLY)
inner1Col.loadPixels();
 for (var y = 0; y < inner1.height; y++) {
    for (var x = 0; x < inner1.width; x++) {
      var index = (x + y * inner1.width) * 4;
    
    if (inner1Col.pixels[index + 3] > 10){
      inner1Col.pixels[index + 3] = col6[3];
    }
  }
  }
  inner1Col.updatePixels();



first0Col = p.createImage(first0.width,first0.height);
first0.loadPixels();
first0Col.loadPixels();
 for (var y = 0; y < first0.height; y++) {
    for (var x = 0; x < first0.width; x++) {
      var index = (x + y * first0.width) * 4;
    
    if (first0.pixels[index + 3] > 10){
      first0Col.pixels[index + 0] = col5[0];
      first0Col.pixels[index + 1] = col5[1];
      first0Col.pixels[index + 2] = col5[2];
      first0Col.pixels[index + 3] = 255;
    }
  }
  }
  first0Col.updatePixels();
  first0Col.blend(first0, 0, 0, first0.width, first0.height, 0, 0, first0.width, first0.height, p.MULTIPLY)
first0Col.loadPixels();
 for (var y = 0; y < first0.height; y++) {
    for (var x = 0; x < first0.width; x++) {
      var index = (x + y * first0.width) * 4;
    
    if (first0Col.pixels[index + 3] > 10){
    first0Col.pixels[index + 3] = col5[3];
    }
  }
  }
  first0Col.updatePixels();



first1Col = p.createImage(first1.width,first1.height);
first1.loadPixels();
first1Col.loadPixels();
 for (var y = 0; y < first1.height; y++) {
    for (var x = 0; x < first1.width; x++) {
      var index = (x + y * first1.width) * 4;
    
    if (first1.pixels[index + 3] > 10){
      first1Col.pixels[index + 0] = col4[0];
      first1Col.pixels[index + 1] = col4[1];
      first1Col.pixels[index + 2] = col4[2];
      first1Col.pixels[index + 3] = 255;
    }
  }
  }
  first1Col.updatePixels();
  first1Col.blend(first1, 0, 0, first1.width, first1.height, 0, 0, first1.width, first1.height, p.MULTIPLY)
first1Col.loadPixels();
 for (var y = 0; y < first1.height; y++) {
    for (var x = 0; x < first1.width; x++) {
      var index = (x + y * first1.width) * 4;
    
    if (first1Col.pixels[index + 3] > 10){
       first1Col.pixels[index + 3] = col4[3];
    }
  }
  }
  first1Col.updatePixels();



second0Col = p.createImage(second0.width,second0.height);
second0.loadPixels();
second0Col.loadPixels();
 for (var y = 0; y < second0.height; y++) {
    for (var x = 0; x < second0.width; x++) {
      var index = (x + y * second0.width) * 4;
    
    if (second0.pixels[index + 3] > 10){
      second0Col.pixels[index + 0] = col3[0];
      second0Col.pixels[index + 1] = col3[1];
      second0Col.pixels[index + 2] = col3[2];
      second0Col.pixels[index + 3] = 255;
    }
  }
  }
  second0Col.updatePixels();
  second0Col.blend(second0, 0, 0, second0.width, second0.height, 0, 0, second0.width, second0.height, p.MULTIPLY)
second0Col.loadPixels();
 for (var y = 0; y < second0.height; y++) {
    for (var x = 0; x < second0.width; x++) {
      var index = (x + y * second0.width) * 4;
    
    if (second0Col.pixels[index + 3] > 10){
      second0Col.pixels[index + 3] = col3[3];
    }
  }
  }
  second0Col.updatePixels();



second1Col = p.createImage(second1.width,second1.height);
second1.loadPixels();
second1Col.loadPixels();
 for (var y = 0; y < second1.height; y++) {
    for (var x = 0; x < second1.width; x++) {
      var index = (x + y * second1.width) * 4;
    
    if (second1.pixels[index + 3] > 10){
      second1Col.pixels[index + 0] = col2[0];
      second1Col.pixels[index + 1] = col2[1];
      second1Col.pixels[index + 2] = col2[2];
      second1Col.pixels[index + 3] = 255;
    }
  }
}
  second1Col.updatePixels();
  second1Col.blend(second1, 0, 0, second1.width, second1.height, 0, 0, second1.width, second1.height, p.MULTIPLY)
second1Col.loadPixels();
 for (var y = 0; y < second1.height; y++) {
    for (var x = 0; x < second1.width; x++) {
      var index = (x + y * second1.width) * 4;
    
    if (second1Col.pixels[index + 3] > 10){
    second1Col.pixels[index + 3] = col2[3];
    }
  }
}
  second1Col.updatePixels();



plume0Col = p.createImage(plume0.width,plume0.height);
plume0.loadPixels();
plume0Col.loadPixels();
 for (var y = 0; y < plume0.height; y++) {
    for (var x = 0; x < plume0.width; x++) {
      var index = (x + y * plume0.width) * 4;
    
    if (plume0.pixels[index + 3] > 10){
      plume0Col.pixels[index + 0] = col1[0];
      plume0Col.pixels[index + 1] = col1[1];
      plume0Col.pixels[index + 2] = col1[2];
      plume0Col.pixels[index + 3] = 255;
    }
  }
  }
  plume0Col.updatePixels();
  plume0Col.blend(plume0, 0, 0, plume0.width, plume0.height, 0, 0, plume0.width, plume0.height, p.MULTIPLY)
plume0Col.loadPixels();
 for (var y = 0; y < plume0.height; y++) {
    for (var x = 0; x < plume0.width; x++) {
      var index = (x + y * plume0.width) * 4;
    
    if (plume0Col.pixels[index + 3] > 10){
      plume0Col.pixels[index + 3] = col1[3];
    }
  }
  }
  plume0Col.updatePixels();



plume1Col = p.createImage(plume1.width,plume1.height);
plume1.loadPixels();
plume1Col.loadPixels();
 for (var y = 0; y < plume1.height; y++) {
    for (var x = 0; x < plume1.width; x++) {
      var index = (x + y * plume1.width) * 4;
    
    if (plume1.pixels[index + 3] > 10){
      plume1Col.pixels[index + 0] = col0[0];
      plume1Col.pixels[index + 1] = col0[1];
      plume1Col.pixels[index + 2] = col0[2];
      plume1Col.pixels[index + 3] = 255;
    }
  }
  }
  plume1Col.updatePixels();
  plume1Col.blend(plume1, 0, 0, plume1.width, plume1.height, 0, 0, plume1.width, plume1.height, p.MULTIPLY)
plume1Col.loadPixels();
 for (var y = 0; y < plume1.height; y++) {
    for (var x = 0; x < plume1.width; x++) {
      var index = (x + y * plume1.width) * 4;
    
    if (plume1Col.pixels[index + 3] > 10){
      plume1Col.pixels[index + 3] = col0[3];
    }
  }
  }
  plume1Col.updatePixels();


//PUSH
ronds.push(inner0);
ronds.push(inner1);
cells.push(first0);
cells.push(first1);
cells.push(second1);
ovales.push(second0);
plumes.push(plume0);
plumes.push(plume1);
pointes.push(pointe);




imagesChosen = true;
  };  

p.changeColors = function(){
psy = !psy;
if(psy){
  buttonCouleursPsy.html("Couleurs originales");
}
if(!psy){
  buttonCouleursPsy.html("Couleurs psychédéliques");
}
}

p.changeAnimation = function(){
ani = !ani;
if(ani){
  buttonAnimation.html("Moins d'animation");
}
if(!ani){
  buttonAnimation.html("Plus d'animation");
}
}
  
  
  p.windowResized = function() {
  p.resizeCanvas(p.windowWidth, p.windowHeight);
     if(imagesChosen){
       button.position(p.windowWidth*0.43,0);
     }else{
     button.position(p.windowWidth*0.43,p.windowHeight*0.5);
     }
      button.size(p.windowWidth*0.15,p.windowWidth*0.02);
      button.style('font-size', p.windowWidth*0.009 + 'px');
    
    
     buttonAnimation.position(p.windowWidth*0.1,0);
    buttonAnimation.size(p.windowWidth*0.17,p.windowWidth*0.02);
    button.style('font-size', p.windowWidth*0.009 + 'px');
    
    
     buttonCouleursPsy.position(p.windowWidth*0.7,0);
     buttonCouleursPsy.size(p.windowWidth*0.17,p.windowWidth*0.02);
    buttonCouleursPsy.style('font-size', p.windowWidth*0.009 + 'px');
  }
  
  };

let myCells = new p5(sketchCells);



