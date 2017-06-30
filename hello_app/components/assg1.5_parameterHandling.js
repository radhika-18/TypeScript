export function parameterHandling_defaultParametersAdd(a=1,b=2){    
        return a+b;
}

export function parameterHandling_restParametersuserFriends(username,...friends){
        console.log(username);
        friends.forEach(n=>console.log(n));
}

export function parameterHandling_spreadParametersprintCapitalNames(name1, name2, name3, name4, name5){
        console.log(name1.toUpperCase(),name2.toUpperCase(),name3.toUpperCase(),name4.toUpperCase(),name5.toUpperCase());
    }
