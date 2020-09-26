function Dog(name, color, age)
{
  this.name = name;
  this.color = color;
  this.age = age;
  this.aboie = function()
  {
    console.log("waouf" + this.name + this.color);
  }
}

var petitCaniche = new Dog("Choupette", "white", "4");

var grosPitbull = new Dog("Rex", "black", "2");

// console.log(petitCaniche);
// console.log(grosPitbull);
petitCaniche.aboie();
grosPitbull.aboie();
