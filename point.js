class Point {
  constructor(x,y,temperature){
    this.x = x;
    this.y = y;
    this.temperature = temperature;
    this.color_scale = map(this.temperature,-100,100,0,255);
  }
  show(){
    stroke(this.color_scale,this.color_scale/3,255-this.color_scale);
    fill(this.color_scale,this.color_scale/3,255-this.color_scale);
    rect(this.x,this.y,width/num_points,25);
    stroke(255);
    fill(255);
  }
}
