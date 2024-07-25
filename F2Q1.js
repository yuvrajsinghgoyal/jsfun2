const allUsers = [
    "Anurag",
    "Mithun",
    "Alka",
    "Prabir",
    "Vinay",
    "Shubham",
    "Shivan",
    "Farman",
  ];
 function isUserpresent(user){
    if(allUsers.includes(user)){
        console.log(`yes ${user} : is present in our data base `)
        return true
    }
    else {
        console.log(`No user ${user} : is not present is our database`)
         return true
    }
 }

 isUserpresent("Alka");
 isUserpresent("yuvi");
