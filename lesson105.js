
    const displayName= function (age,city) {
        console.log(this.name + " " + this.lastName + " having age " + age + " from " + city)
    }
    
    let user ={
        name: 'Raj',
        lastName: 'Khurana',  
    }

    let user2 = {
        name: 'Bhushan',
        lastName: 'Pawar',
       
    }

    // call
    displayName.call(user, 30, 'Delhi')
    displayName.call(user2, 50, 'Kolkata')


    //apply
    displayName.apply(user,[30, 'Delhi'])
    displayName.apply(user2,[50, 'Kolkata'])


    //Bind

    const displayingName=  displayName.bind(user, 30, 'Delhi')
    displayingName()
    const displayingName2 = displayName.bind(user2, 50, 'Pune')
    displayingName2()
