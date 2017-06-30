function getListOfUsers(chatroom,name){
    let arr=[];
    switch(name){
        case 1:arr=[...chatroom.get("Chatroom1_Users")];
                break;
               

        case 2:arr=[...chatroom.get("Chatroom2_Users")];
                break;
    }
    console.log(`Users in chatroom${name} are\n`);
    arr.forEach(function(element) {
        console.log(element);
    });
}

function getListOfMessages(chatroom,name){
    let arr=[];
    switch(name){
        case 1:arr=chatroom.get("Chatroom1_Messages");
                break;
               

        case 2:arr=chatroom.get("Chatroom2_Messages");
                break;
    }
    console.log(`Messages in chatroom${name} are\n`);
    arr.forEach(function(element) {
        console.log(element);
    });
}

export function collectionsTest(){
    let chatrooms=new Map();
    chatrooms.set('Chatroom1_Users',new Set(['User1','User2','User3']));
    chatrooms.set('Chatroom1_Messages',["Message1","Message2","Message3"]);
    chatrooms.set('Chatroom2_Users',new Set(['User4','User5','User6']));
    chatrooms.set('Chatroom2_Messages',["Message4","Message5","Message6"]);
    getListOfUsers(chatrooms,1);
    getListOfUsers(chatrooms,2)
    getListOfMessages(chatrooms,1);
    getListOfMessages(chatrooms,2);   
}