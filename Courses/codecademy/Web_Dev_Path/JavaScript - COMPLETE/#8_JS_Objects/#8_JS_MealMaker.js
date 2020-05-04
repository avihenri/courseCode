// INTRODUCTION TO JAVASCRIPT
// Meal Maker
    /*
        As a frequent diner, you love trying out new restaurants and experimenting with different foods. However, 
        having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you 
        want an easier way to be able to figure out what you are going to eat.

        In this project, you'll use JavaScript to randomly create a three-course meal based on what is available 
        on a menu. We'll keep running it until we're satisfied with the generated meal!
    */

   const menu = {
    _courses:{
        appetizers:[],
        mains:[],
        desserts:[]
    },
      get appetizers() {
        return this._courses.appetizers;
      },
      get mains() {
        return this._courses.mains;
      },
      get desserts() {
        return this._courses.desserts;
      },
      set appetizers(appetizersIn) {
        return this._courses.appetizers = appetizersIn;
      },  
      set mains(mainsIn) {
        return this._courses.mains = mainsIn;
      },  
      set desserts(dessertsIn) {
        return this._courses.desserts = dessertsIn;
      },
      get courses() {
        return {
          appetizers: this.appetizers,
          mains: this.main,
          desserts: this.desserts
        }
      },
      addDishToCourse(courseName, dishName, dishPrice) {
        let dish = {      
            name: dishName,
            price: dishPrice,
        }   
        this._courses[courseName].push(dish);    
      },
      getRandomDishFromCourse(courseName) {
        let dishes = this._courses[courseName];
        let randomIndex = Math.floor(Math.random * dishes.length);
        return dishes[randomIndex];
      },
      generateRandomMeal() {    
        let appetizer = this.getRandomDishFromCourse('appetizers');    
        let main = this.getRandomDishFromCourse('mains');
        let dessert = this.getRandomDishFromCourse('desserts');
        const totPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer}, ${main}, ${dessert} and the total cost is: ${totPrice}`;
      }
    };
    
    
    
    // menu.addDishToCourse('appetizers', 'Tomato Soup', 4.50);
    // menu.addDishToCourse('appetizers', 'Chicken Pate', 5.50);
    // menu.addDishToCourse('appetizers', 'Salmon', 6.50);
    // menu.addDishToCourse('mains', 'Chicken Burger', 12.50);
    // menu.addDishToCourse('mains', 'Pesto Pasta', 10.50);
    // menu.addDishToCourse('mains', 'Pizza', 11.50);
    // menu.addDishToCourse('desserts', 'chocolate cake', 4.50);
    // menu.addDishToCourse('desserts', 'ice cream', 3.50);
    // menu.addDishToCourse('desserts', 'Fruit salad', 4.50);
    
    // console.log(menu.generateRandomMeal());
    
    
    
    
    