const tamogotchi = {
    name: 'Ибрагим',
    meal: 3,
    energy: 4,
    mood: 2,
       getStatus: function() {
        let mealStatus;
        let energyStatus;
        let moodStatus;
        if(this.meal < 3){
          mealStatus = "Я голоден"
        } else {
          mealStatus = "Я не голоден"
        };

        if(this.energy < 3){
          energyStatus = "Я хочу спать"
        } else {
          energyStatus = "Я не хочу спать"
        };

        if(this.mood < 3){
          moodStatus = "Мне скучно"
        } else {
          moodStatus = "Мне весело"
        };
         
         if(this.meal <= 0 || this.energy <= 0 || this.mood <= 0){
          console.log(`${this.name} умер :(`)
         } else {
          console.log(`Имя: ${this.name}, Еда: ${mealStatus} (${this.meal}), Энергия: ${energyStatus} (${this.energy}), Настроение: ${moodStatus} (${this.mood}).`);
         }
       },
       
       setName: function (parametr) {
         this.name = parametr
       },

       
       eat: function (){
         if(this.meal < 5){
          this.meal = this.meal + 1
          this.mood = this.mood - 1
         }
        },
       sleep: function (){
         if(this.energy < 5){
          this.energy = this.energy + 1
          this.meal = this.meal - 1
         }
        },
        play: function (){
         if(this.mood  < 5){
          this.mood = this.mood + 1
          this.energy = this.energy - 1
         }
        },

        
       // фича от меня
        suicide: function (){
          this.meal = 0;
          this.energy = 0;
          this.mood = 0;
        }
  }
  tamogotchi.setName('Jamic')
  tamogotchi.eat()
  tamogotchi.sleep()
  tamogotchi.play()
  tamogotchi.suicide() // фича от меня
  tamogotchi.getStatus()
