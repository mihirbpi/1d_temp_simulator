

function setup() {
  /* Setup the animation */
  points_array = [];
  temp_array = [];
  num_points = 30;
  alpha = 0.15;
  frame_rate = 10;

  for(var i=0; i<num_points; i++){
    temp_array.push(random(-100,100));
  }
  createCanvas(window.outerWidth-17.5,window.outerHeight-130);
  translate(0,height/2);
  background(0);
  frameRate(frame_rate);
}

function draw() {
  /* The draw loop which is called continuously */
  translate(0,height/2);
  background(0);
  updateTemps();
  updatePointsArray();
  for(let point of points_array){
    point.show();
  }
}

function updateTemps(){
  new_temp_array = temp_array;
  for(var i=0; i<new_temp_array.length; i++){
    if(i == 0){
      new_temp_array[i] = temp_array[i]+alpha*(temp_array[i+1]-temp_array[i]);
    }
    else if(i == new_temp_array.length-1){
      new_temp_array[i] = temp_array[i]+alpha*(temp_array[i-1]-temp_array[i]);
    } else {
      new_temp_array[i] = temp_array[i]+alpha*( (temp_array[i-1]+temp_array[i+1])/2 - temp_array[i]);
    }
  }
  temp_array = new_temp_array;
}

function updatePointsArray(){
  points_array = [];
  for (var i=0; i<temp_array.length; i++){
    points_array.push(new Point( (width/num_points)*i,0,temp_array[i]));
  }
}
