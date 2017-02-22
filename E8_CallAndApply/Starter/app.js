var obj = {

    name: 'John Doe',
    greet: function() {
     
     console.log(`Hello ${ this.name }` );

    }

}

obj.greet();
//using call
obj.greet.call({name: 'Jane Doe'});
//using apply
obj.greet.apply({name: 'Zoe Doe'});