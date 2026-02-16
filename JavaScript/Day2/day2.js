// Operators

        var a = 5;
        var b = 2;
        console.log(a+b);
        console.log(a-b);
        console.log(a/b);
        console.log(a*b);
        console.log(a%b);
        console.log(a++);
        console.log(++a);
        console.log(a--);
        console.log(--a);

        // Comparision
        
        console.log(3 ==  '3');
        console.log(3 === '3');
        console.log( 4 != 5);
        console.log( 4 !== 3);
        console.log(5>4);
        console.log(5<4);
        console.log(5>=5);
        console.log(4<=5);

        //  
        console.log(0 && 10);        // 0
        console.log(true && "Hi");  // "Hi"
        console.log(0 && 10);        // 0
        console.log(true && "Hi");  // "Hi"
        var email = 'avda';
        var password = 'sgs';
        if (email && password) {
        console.log("Login allowed");
        }
        else{
            console.log("Enter details");
        }

        let loggedIn = false;

        if(!loggedIn){
        console.log("Logined");
        }
        else{
            console.log("Not Logged in");
        }