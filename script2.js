var dog = new Object;
  dog.name = "Mbo";
  dog.color = "dalmatiens";
  dog.age = 3;
  dog.aboie = function(number)
  {
    while (number>0) {
      console.log(number.toString() + `` + "waouf");
      number--;
    }
  };

  dog.aboie(2);
