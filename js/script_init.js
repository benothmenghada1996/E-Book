function signUpAdmin(){
    //Recuperation des donnees
    var usersTab= JSON.parse(localStorage.getItem("users") || "[]"); 
    var registredUserId= JSON.parse(localStorage.getItem("registredUserIds") || "1" );
    var firstName= document.getElementById("firstName").value;
    var isValidFirstName= checkSize(firstName,3);
    error (isValidFirstName, "firstName", "firstNameError", "at least 3 caracters long");

    var LastName= document.getElementById("lastName").value;
    var isValidLastName= checkSize(LastName,6);
    error (isValidLastName, "lastName","lastNameError", "at least 6 caracters long");

    var email= document.getElementById("email").value;
    var passeword= document.getElementById("pwd").value;

if(isValidFirstName && isValidLastName){
// creation de l'objet user 
    var user={
        id: registredUserId,
        fName: firstName,
        lName: LastName,
        email : email,
        pwd: passeword, 
        role : "admin",
    }
// remplissage du tableau avec les objets users + sauvegarde dans LS 
usersTab.push(user); 
localStorage.setItem("users", JSON.stringify(usersTab)); 
localStorage.setItem("registredUserIds", registredUserId+1);
location.replace("Login.html");
}
}
// function signUpAdmin(){
//     //Recuperation des donnees
//     var usersTab= JSON.parse(localStorage.getItem("users") || "[]"); 
//     var registredUserId= JSON.parse(localStorage.getItem("registredUserIds") || "1" );

// // creation de l'objet user 
//     var user={
//         id: registredUserId,
//         fName: "amal",
//         lName: "BenJemaa",
//         email : "benjemaa@gmail.com",
//         pwd: "78945632", 
//         role : "admin",
//     }
// // remplissage du tableau avec les objets users + sauvegarde dans LS 
// usersTab.push(user); 
// localStorage.setItem("users", JSON.stringify(usersTab)); 
// localStorage.setItem("registredUserIds", registredUserId+1);
// location.replace("Login.html");
// }
function signUpOwner(){
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
    var registredUserId= JSON.parse(localStorage.getItem("registredUserIds") || "1" );
    var fName = document.getElementById("fNameOwner").value;
    var isValidFirstName= checkSize(fName,3);
    error (isValidFirstName, "fNameOwner","fNameOwnerError", "at least 3 caracters long");

    var lName = document.getElementById("lNameOwner").value;
    var isValidLastName= checkSize(lName,4);
    error (isValidFirstName,"lNameOwner","lNameOwnerError", "at least 3 caracters long");

    var email = document.getElementById("emailOwner").value;
    var isValidEmail= existEmail(usersTab, email);
    error (!isValidEmail,"emailOwner", "emailOwnerError", "This e-mail already exists");

    var Tel = document.getElementById("telOwner").value;
    var isValidtel= checkTel(Tel);
    error (isValidtel, "telOwner","TelOwnerError", "The telephone number should be 8 characters long");

    var adress = document.getElementById("adressOwner").value;
    var isValidAdress= checkLength(adress);
    error (isValidAdress, "adressOwner","adressOwnerError", "Please fill in this field");

    var password = document.getElementById("pwdOwner").value;
    var isValidpwd= checkSize(password,8);
    error (isValidpwd, "pwdOwner","pwdOwnerError", "The password should be at least 8 characters long");

    var confirmPassword = document.getElementById("confirmPwdOwner").value;
    var isEqualPwd= comparePwd(password,confirmPassword);
    error (isEqualPwd,"confirmPwdOwner", "confirmPwdOwnerError", "Please confirm your pwd");

if (isValidFirstName && isValidLastName && !isValidEmail && isValidtel && isValidAdress  && isValidpwd && isEqualPwd){
    
    var user ={
        id : registredUserId,
        fName :fName,
        lName : lName,
        email : email,
        tel : Tel,
        adress : adress,
        pwd : password,
        role : "Owner",
        statu : "ok",
    }
    usersTab.push(user);
    localStorage.setItem("users",JSON.stringify(usersTab)) ;
    localStorage.setItem("registredUserIds",registredUserId+1) ;
    location.replace("Login.html");
}
}
function signUpClient(){
    var usersTab= JSON.parse(localStorage.getItem("users") || "[]"); 
    var registredUserId= JSON.parse(localStorage.getItem("registredUserIds") || "1" );
    var firstName= document.getElementById("firstName").value;
    var isValidFirstName= checkSize(firstName,3);
    error (isValidFirstName, "firstName", "clientFnameError", "at least 3 caracters long");

    var LastName= document.getElementById("lastName").value;
    var isValidLastName= checkSize(LastName,4);
    error (isValidFirstName, "lastName","clientLnameError", "at least 6 caracters long");

    var email= document.getElementById("email").value;
    var isValidEmail= existEmail(usersTab,email);
    error (!isValidEmail, "email","clientEmailError", "This e-mail already exists");

    var Tel= document.getElementById("tel").value;
    var isValidTel= checkTel(Tel);
    error (isValidTel, "tel","TelError", "The telephone number should be 8 characters long");

    var adress = document.getElementById("adress").value;
    var isValidAdress= checkLength(adress);
    error (isValidAdress, "adress","adressError", "Please fill in this field");

    var password= document.getElementById("pwd").value;
    var isValidpwd= checkSize(password,8);
    error (isValidpwd, "pwd","pwdError", "The password should be at least 8 characters long");

    var confirmPassword = document.getElementById("confirmPwd").value;
    var isEqualPwd= comparePwd(password,confirmPassword);
    error (isEqualPwd, "confirmPwd","confirmpwdError", "Please confirm your pwd");

if(isValidFirstName&& isValidLastName&&  !isValidEmail && isValidAdress&& isValidTel && isValidpwd && isEqualPwd){
    var user={
        id: registredUserId,
        fName: firstName,
        lName: LastName,
        email : email,
        tel : Tel,
        adress : adress,
        pwd: password, 
        role : "client",
    }
usersTab.push(user); 
localStorage.setItem("users", JSON.stringify(usersTab)); 
localStorage.setItem("registredUserIds", registredUserId+1);
location.replace("Login.html");
}
}
function Login(){
    var email= document.getElementById("loginEmail").value;
    var pwd= document.getElementById("loginPwd").value;
    var findedUser;
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
    for (let i = 0; i < usersTab.length; i++) {
        if (email==usersTab[i].email && pwd==usersTab[i].pwd) {
            findedUser=usersTab[i];
            break;}
    }
    if(findedUser){
        if (findedUser.role=="Owner" && findedUser.statu=="Nok"){
            document.getElementById("loginError").innerHTML="You are not Verified !";
            document.getElementById("loginError").style.color="red";}
        else if (findedUser.role=="Owner" && findedUser.statu=="ok") {
            localStorage.setItem("connectedUser",findedUser.id);
            location.replace("ownerSpace.html");}
        if (findedUser.role=="client"){
            localStorage.setItem("connectedUser",findedUser.id);
            location.replace("Home.html");} 
        if (findedUser.role=="admin"){ 
        localStorage.setItem("connectedUser",findedUser.id);
        location.replace("adminSpace.html");} 
    } 
    else {
    document.getElementById("loginError").innerHTML="Invalid username or password";
    document.getElementById("loginError").style.color ="red";}
}
function dynamicHeader(){
    var connectedUserId = localStorage.getItem("connectedUser");
    var user = searchObj("users",connectedUserId);
    var innerHeader;
    if (connectedUserId){
        localStorage.setItem("displayedUserId",connectedUserId);
        if (user.role==="client"){
            innerHeader = `<li class="active"><a href="./index.html">Home</a></li>
            <li><a href="allGuestHouses.html">Guest Houses</a></li>
            <li><a href="reservationsTab.html"><i class="fa fa-cart-plus fa-lg"></i> Basket </a></li>
            <li><a href="./contact.html">Contact</a></li>
            <li><a href="" onclick ="signOut()"><i class="fa fa-sign-out fa-lg"></i> Sign-Out </a></li>` 
        }
        else if (user.role==="Owner") {
            innerHeader =  `<li class="active"><a href="./index.html">Home</a></li>
            <li><a href="allGuestHouses.html"> My GuestHouses</a></li>
            <li><a href="OwnerHousesTab.html">Dashboard</a></li>
            <li><a href="./contact.html">Contact</a></li>
            <li><a href="" onclick ="signOut()"><i class="fa fa-sign-out fa-lg"></i> Sign-Out </a></li>` 
        }  
        else { 
            innerHeader = `<li class="active"><a href="./index.html">Home</a></li>
            <li><a href="allGuestHouses.html">GuestHouses</a></li>
            <li><a href="usersList.html">Dashboard</a></li>
            <li><a href="./contact.html">Contact</a></li>
            <li><a href="" onclick ="signOut()"><i class="fa fa-sign-out fa-lg"></i> Sign-Out </a></li>` 
        }  
    }
    else {
    innerHeader = `<li class="active"><a href="./index.html">Home</a></li>
    <li><a href="allGuestHouses.html">Guest Houses</a></li>
    <li><a href="./contact.html">Contact</a></li>
    <li><a href="#">SignUp</a>
        <ul class="dropdown">
            <li><a href="signUpOwner.html">Owner</a></li>
            <li><a href="signUpClient.html">Client</a></li>
        </ul>
    </li>
    <li><a href="Login.html"><i class="fa fa-sign-in" fa-lg"></i> LogIn </a></li>`  
}
 document.getElementById("navMenu").innerHTML=innerHeader; 
}
function dynamicDash(){
    var connectedUserId = localStorage.getItem("connectedUser");
    var user = searchObj("users",connectedUserId);
    var innerHeader;
    if (user.role== "Owner" || user.role == "admin"){
        localStorage.setItem("displayedUserId",connectedUserId);
            innerHeader = `<div class="mt-3">
                <span class="dash-name">${user.fName}</span>
                <p class="p-dash">${user.role}</p>
            </div>` 
    }
    else{location.replace("Home.html")}
 document.getElementById("userDetails").innerHTML=innerHeader; 
}
// Ajout des maisons par un owner (addGuestHouse.html)
function addGuestHouse(){
    var GuestHousesTab= JSON.parse(localStorage.getItem("GuestHouses") || "[]");
    var addedHouseId= JSON.parse(localStorage.getItem("addedHouseIds") || "1" );
    var ownerId=localStorage.getItem("connectedUser");
    var Name= document.getElementById("Name").value;
    var isValidName= checkLength(Name);
    error (isValidName, "Name","nameError", "Please fill in this field");

    var adress= document.getElementById("adress").value;
    var isValidAdress= checkLength(adress);
    error (isValidAdress, "adress","adressError", "Please fill in this field");

    var city= document.getElementById("cityName").value;
    var isValidCityName= checkLength(city);
    error (isValidCityName, "cityName","cityNameError", "Please fill in this field");

    var description= document.getElementById("description").value;
    var isValidDescription= checkLength(description);
    error (isValidDescription, "description","descriptionError", "Please fill in this field");
  
    var imageURL= document.getElementById("houseImage").value;
    var isValidImageURL= checkLength(imageURL);
    error (isValidImageURL, "houseImage","houseImageError", "Please fill in this field");

if(isValidName && isValidAdress && isValidCityName && isValidDescription && isValidImageURL){
// creation de l'objet maison
    var GuestHouse={
        id:addedHouseId,
        ownerId: ownerId,
        Name: Name,
        adress: adress,
        city : city,
        description : description,
        imageURL : imageURL,
    }

// Sauvegarde des donneés dans le local Storage 
GuestHousesTab.push(GuestHouse); 
localStorage.setItem("GuestHouses", JSON.stringify(GuestHousesTab));
localStorage.setItem("addedHouseIds",addedHouseId+1) ;
}
}
// Ajout des chambres par un owner (addRooms.html)
function addRooms(){
    var roomsTab= JSON.parse(localStorage.getItem("Rooms") || "[]");
    var addedRoomId= JSON.parse(localStorage.getItem("addedRoomIds") || "1" );
    var houseId = JSON.parse(localStorage.getItem("displayedGuestHouse"));
    var Name= document.getElementById("Name").value;
    var isValidName= checkLength(Name);
    error (isValidName, "Name","nameError", "Please fill in this field");
    
    var Price= document.getElementById("price").value;
    var isValidPrice= checkPrice(Price);
    error (isValidPrice, "price","priceError", "The price should be > 0");

    var capacity= document.getElementById("capacity").value;
    var isValidCapacity= checkLength(capacity);
    error (isValidCapacity, "capacity","capacityError", "Please fill in this field");

    var description= document.getElementById("description").value;
    var isValidDescription= checkLength(description);
    error (isValidCapacity, "description","descriptError", "Please fill in this field");

    var imageURL= document.getElementById("roomImage").value;
    var isValidImageURL= checkLength(imageURL);
    error (isValidImageURL, "roomImage","roomImageError", "Please fill in this field");

var roomNumber =  CountRoomsNumber(houseId);
if (roomNumber < 5){
    // console.log (roomNumber);
    if(isValidName && isValidPrice && isValidCapacity && isValidDescription && isValidImageURL){
        // creation d'un objet
        var room={
            id:addedRoomId,
            HouseId: houseId,
            Name: Name,
            price: Price,
            capacity : capacity,
            description : description,
            imageURL : imageURL,
        }   

    roomsTab.push(room); 
    localStorage.setItem("Rooms", JSON.stringify(roomsTab));
    localStorage.setItem("addedRoomIds",addedRoomId+1) ;
    }
} 
else{document.getElementById("roomNbError").innerHTML = "Maximum 5 rooms";}
}
// Affichage de toutes les maisons d'hotes (allGuestHouses.html)
function displayAllGuestHouses(){
    var GuestHousesTab= JSON.parse(localStorage.getItem("GuestHouses") || "[]");
    var connectedUserId=localStorage.getItem("connectedUser");
    var user = searchObj("users",connectedUserId);
    var content="";
    for (let i = 0; i < GuestHousesTab.length; i++) {
        if (user.role == "client"){
            content=content + `<div class="col-lg-3 col-md-6 mb-4 justify-content-center">
                <div class="hp-room-item set-bg"  style="border-radius: 8px;" data-setbg="${GuestHousesTab[i].imageURL}">
                    <div class="hr-text">
                        <h3 class="text-body-secondary">${GuestHousesTab[i].Name}</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td class="r-o">Address:</td>
                                    <td>${GuestHousesTab[i].adress}</td>
                                </tr>
                                <tr>
                                    <td class="r-o">City:</td>
                                    <td>${GuestHousesTab[i].city}</td>
                                </tr>
                                <tr>
                                    <td class="r-o">Description:</td>
                                    <td>${GuestHousesTab[i].description}</td>
                                </tr>
                                <tr>
                                    <td class="r-o">Room Number:</td>
                                    <td>${GuestHousesTab[i].roomNumber}</td>
                                </tr>
                            </tbody>
                        </table>
                        <a href="#" class="primary-btn" onclick="goToObj('displayedGuestHouse',${GuestHousesTab[i].id},'ourRooms.html')">More Details</a>
                    </div>
                </div>
            </div>`
        }  
        if (user.role == "Owner"){
            if (GuestHousesTab[i].ownerId == connectedUserId){
            content=content + `<div class="col-lg-3 col-md-2 mb-4">
                <div class="hp-room-item set-bg" data-setbg="${GuestHousesTab[i].imageURL}">
                    <div class="hr-text">
                        <h3 class="text-body-secondary">${GuestHousesTab[i].Name}</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td class="r-o">Address:</td>
                                    <td>${GuestHousesTab[i].adress}</td>
                                </tr>
                                <tr>
                                    <td class="r-o">City:</td>
                                    <td>${GuestHousesTab[i].city}</td>
                                </tr>
                                <tr>
                                    <td class="r-o">Description:</td>
                                    <td>${GuestHousesTab[i].description}</td>
                                </tr>
                                <tr>
                                    <td class="r-o">Room Number:</td>
                                    <td>${GuestHousesTab[i].roomNumber}</td>
                                </tr>
                            </tbody>
                        </table>
                        <a href="#" class="primary-btn" onclick="goToObj('displayedGuestHouse',${GuestHousesTab[i].id},'ourRooms.html')">More Details</a>
                    </div>
                </div>
            </div>`
            }
        }  
        if (user.role == "admin"){
            content=content + `<div class="col-lg-3 col-md-2 mb-4">
                <div class="hp-room-item set-bg" data-setbg="${GuestHousesTab[i].imageURL}">
                    <div class="hr-text">
                        <h3 class="text-body-secondary">${GuestHousesTab[i].Name}</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td class="r-o">Address:</td>
                                    <td>${GuestHousesTab[i].adress}</td>
                                </tr>
                                <tr>
                                    <td class="r-o">City:</td>
                                    <td>${GuestHousesTab[i].city}</td>
                                </tr>
                                <tr>
                                    <td class="r-o">Description:</td>
                                    <td>${GuestHousesTab[i].description}</td>
                                </tr>
                                <tr>
                                    <td class="r-o">Room Number:</td>
                                    <td>${GuestHousesTab[i].roomNumber}</td>
                                </tr>
                            </tbody>
                        </table>
                        <a href="#" class="primary-btn" onclick="goToObj('displayedGuestHouse',${GuestHousesTab[i].id},'ourRooms.html')">More Details</a>
                    </div>
                </div>
            </div>`
        }     
    }
document.getElementById("AllGuestHousesDisplay").innerHTML=content;
} 
// Affichage de toutes les chambres pour chaque maison d'hote selectionnée (ourRooms.html)
function displayRooms(){
    var roomsTab= JSON.parse(localStorage.getItem("Rooms") || "[]");
    var HouseId=localStorage.getItem("displayedGuestHouse");
    var connectedUserId=localStorage.getItem("connectedUser");
    var user = searchObj("users",connectedUserId);
    var content="";
    for (let i = 0; i < roomsTab.length; i++) {
        if (HouseId == roomsTab[i].HouseId){
            if (user.role == "client"){
                content=content + `<div class="col-lg-4 col-md-6 me-5">
                    <div class="blog-item set-bg" data-setbg="${roomsTab[i].imageURL}">
                        <div class="bi-text">
                            <span class="b-tag">Room</span>
                            <h4><a href="#" onclick=" goToObj('displayedRoom',${roomsTab[i].id},'room-details.html')">${roomsTab[i].Name}</a></h4>
                        </div>
                    </div>
                </div>` 
            } 
            if (user.role == "Owner"){
                var house = searchObj("GuestHouses",HouseId);
                if (house.ownerId == connectedUserId){ 
                    content=content + `<div class="col-lg-4 col-md-6 me-5">
                    <div class="blog-item set-bg" data-setbg="${roomsTab[i].imageURL}">
                        <div class="bi-text">
                            <span class="b-tag">Room</span>
                            <h4><a href="#" onclick="goToObj('displayedRoom',${roomsTab[i].id},'room-details.html')">${roomsTab[i].Name}</a></h4>
                        </div>
                    </div>
                </div>` 
               } 
            }    
            if (user.role == "admin"){
                content=content + `<div class="col-lg-4 col-md-6">
                    <div class="blog-item set-bg" data-setbg="${roomsTab[i].imageURL}">
                        <div class="bi-text">
                            <span class="b-tag">Room</span>
                            <h4><a href="#" onclick="goToObj('displayedRoom',${roomsTab[i].id},'room-details.html')">${roomsTab[i].Name}</a></h4>
                        </div>
                    </div>
                </div>` 
            } 
        }
        }    
document.getElementById("displayAllRooms").innerHTML=content;
} 
// Affichage de tous les détails de chaque chambre (room-details.html)
function displayRoomDetails(){
    var roomId=localStorage.getItem("displayedRoom");
    var roomsTab = JSON.parse(localStorage.getItem("Rooms") || "[]");
    var room = searchObj("Rooms", roomId);
    var innerRoom="";
        innerRoom=innerRoom + `<div class="room-details-item">
        <img src="${room.imageURL}" alt="" class="w-auto h-auto">
        <div class="rd-text">
            <div class="rd-title">
                <h3>${room.Name}</h3>
            </div>
            <div class="row col-lg-12 mt-3 mb-3"><h4 class="ms-2">${room.price}</h4><h4 class="mx-1">TND</h4><h6 class="">/Night</h6></div>
            <table>
                <tbody>
                    <tr>
                        <td class="r-o">Capacity:</td>
                        <td>${room.capacity}</td>
                    </tr>
                    <tr>
                        <td class="r-o">Description:</td>
                        <td class="col-lg-12">${room.description}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>`
    document.getElementById("display-room-details").innerHTML=innerRoom; 
} 
// Reservation d'une chambre (room-details.html)
function bookingRoom(){
    var reservationsTab=JSON.parse(localStorage.getItem("reservations") || "[]");
    var reservationId = JSON.parse(localStorage.getItem("reservationIds") || "1" );
    var userId= localStorage.getItem("connectedUser");
    var checkIn = document.getElementById("date-in").value;
    alert(new Date(checkIn));
    var checkOut = document.getElementById("date-out").value;
    var HouseId = localStorage.getItem("displayedGuestHouse");
    var idRoom= localStorage.getItem("displayedRoom");
    var room = searchObj("Rooms",idRoom);
        for (let i = 0; i < reservationsTab.length; i++) {
            if (reservationsTab[i].idRoom==idRoom){      
             var testAvailability = checkDateInterval(checkIn, checkOut, reservationsTab[i].checkIn, reservationsTab[i].checkOut);
            }
        }
    var isAvailable = testing(testAvailability);
    innerError (isAvailable, "availabilityError", "This room is not available for this period");
    var guestsNumber = document.getElementById("guestsNumber").value;
    var isValidGuestsNumber = compare(guestsNumber,room.capacity);
    innerError (isValidGuestsNumber, "GuestNumberError", "you guests Number exceeds room capacity");
    if (!isAvailable && !isValidGuestsNumber){
            var reservation ={ 
                id : reservationId,
                idRoom :idRoom,
                idHouse : HouseId,
                clientId: userId,
                checkIn : checkIn ,
                checkOut : checkOut,
                guestsNumber: guestsNumber,}     
    reservationsTab.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(reservationsTab));  
    localStorage.setItem("reservationIds", reservationId+1); 
    }
}
//  if(guestsNumber > room.capacity){
    //         document.getElementById("GuestNumberError").innerHTML="you guests Number exceeds room capacity";
    //         document.getElementById("GuestNumberError").style.color="red";
    //     }
    //     else { document.getElementById("GuestNumberError").innerHTML="";}

    //     if(testAvailability==true){
    //         document.getElementById("availabilityError").innerHTML="Not Available for this period";
    //         document.getElementById("availabilityError").style.color="red"; 
    //     }
    //     else { document.getElementById("availabilityError").innerHTML=""}
    // if(guestsNumber > room.capacity || testAvailability==true){
// }
function myGuestHouses(){
    var GuestHousesTab= JSON.parse(localStorage.getItem("GuestHouses") || "[]");
    var connectedUserId=localStorage.getItem("connectedUser") ;
    var HouseId=localStorage.getItem("displayedGuestHouse");
    var content="";
    for (let i = 0; i < GuestHousesTab.length; i++) {
     var user = searchObj("users",connectedUserId);
     var owner = searchObj("users",GuestHousesTab[i].ownerId);
        if (user.role == "Owner"){
            if (connectedUserId == GuestHousesTab[i].ownerId){
                content=content + `<tr> 
                <td>${GuestHousesTab[i].id}</td>
                <td>${GuestHousesTab[i].Name}</td>
                <td>${GuestHousesTab[i].adress}</td>
                <td>${GuestHousesTab[i].city}</td>
                <td>${GuestHousesTab[i].roomNumber}</td>
                <td>
                <button class="btn text-white" style="background-color:#0E2E50; border-color:#0E2E50" onclick="deleteByIndex('GuestHouses',${i})">Delete</button>
                <button class="btn btn-primary"  onclick="modif(${GuestHousesTab[i].id})">Edit</button>
                <button class="btn btn-warning" onclick="goToObj('displayedGuestHouse',${GuestHousesTab[i].id},'OwnerRoomsTab.html')">Rooms</button>
                <button class="btn text-white" style="background-color:#DCA73A; border-color:#DCA73A" onclick="goToObj('newRoom',${HouseId},'addRooms-Dash.html')">
                <i class="fa fa-plus-square me-2"></i> Room</button>
                </td>
                </tr> `
            }
        } 
        else if (user.role == "admin"){
            content=content + `<tr> 
            <td>${GuestHousesTab[i].id}</td>
            <td>${GuestHousesTab[i].Name}</td>
            <td>${GuestHousesTab[i].adress}</td>
            <td>${GuestHousesTab[i].city}</td>
            <td>${GuestHousesTab[i].roomNumber}</td>
            <td>${owner.fName}</td>
            <td>${owner.lName}</td>
            <td>
            <button class="btn text-white" style="background-color:#0E2E50; border-color:#0E2E50" onclick="deleteByIndex('GuestHouses',${i})">Delete</button>
            <button class="btn btn-warning" onclick="goToObj('displayedGuestHouse',${GuestHousesTab[i].id},'admin-Rooms.html')">Rooms</button>
            </td>
            </tr> `
        }
    }
document.getElementById("myGuestHouses").innerHTML=content;
}
//  en cliquant su Edit fct qui nous amène à la page (editGuestHouse.html) et crée un clé qui prend l'id de la maison à modifier 
function modif(id){
    localStorage.setItem("editedGuestHouse",id); 
    location.replace("editGuestHouse.html");  
}
// (editGuestHouse.html)
function editGuestHouse(){ 
    var GuestHousesTab= JSON.parse(localStorage.getItem("GuestHouses"));
    var editedGuestHouse= localStorage.getItem("editedGuestHouse");
    var content;
    for (let i = 0; i < GuestHousesTab.length; i++) {
        if(editedGuestHouse==GuestHousesTab[i].id){          
        content=` <div class="col-lg-6 offset-lg-3">
            <div class="contact-form">
                <div class="row login-form">
                    <div class="col-lg-12 form-group">
                        <input type="text" id ="updateName" value="${GuestHousesTab[i].Name}">
                    </div>
                    <div class="col-lg-12 form-group">
                        <input type="text" id ="updateAdress" value="${GuestHousesTab[i].adress}">
                    </div>
                    <div class="col-lg-12 form-group">
                        <input type="text" id ="updateCityName" value="${GuestHousesTab[i].city}">
                    </div>
                    <div class="col-lg-12 form-group">
                        <input type="text" id ="updateDescription" value="${GuestHousesTab[i].description}">
                    </div>
                    <div class="col-lg-12 form-group">
                        <input type="number" id ="updateRoomNumber" value="${GuestHousesTab[i].roomNumber}">
                    </div>
                    <div class="col-lg-12 form-group">
                        <input type="text" id ="updateHouseImage" value="${GuestHousesTab[i].imageURL}">
                    </div>
                    <div class="col-lg-12 mb-5">
                        <button type="submit" value="submit" class="btn-block btn-lg gradient-custom-4 text-body" onclick="updateGuestHouse(${GuestHousesTab[i].id})">Update</button>
                    </div>
                </div>
            </div>
        </div>`
        }
    }
    document.getElementById("GuestHouseToEdit").innerHTML= content; 
}
function updateGuestHouse(id){
    var GuestHousesTab= JSON.parse(localStorage.getItem("GuestHouses"));
    var newName= document.getElementById("updateName").value;
    var newAdress = document.getElementById("updateAdress").value;
    var newCityName= document.getElementById("updateCityName").value;
    var newDescription = document.getElementById("updateDescription").value;
    var newRoomNumber= document.getElementById("updateRoomNumber").value;
    var newHouseImage = document.getElementById("updateHouseImage").value;
    for (let i = 0; i < GuestHousesTab.length; i++) {
        if (GuestHousesTab[i].id==id){
        GuestHousesTab[i].Name=newName;
        GuestHousesTab[i].adress=newAdress;
        GuestHousesTab[i].city=newCityName;
        GuestHousesTab[i].description=newDescription;
        GuestHousesTab[i].roomNumber=newRoomNumber;
        GuestHousesTab[i].imageURL=newHouseImage;
        localStorage.setItem("GuestHouses",JSON.stringify(GuestHousesTab));
        location.reload();
        }
    }
}
function myRooms(){
    var roomsTab= JSON.parse(localStorage.getItem("Rooms") || "[]");
    var HouseId=localStorage.getItem("displayedGuestHouse");
    var connectedUserId=localStorage.getItem("connectedUser");
    var user = searchObj("users",connectedUserId);
    var content="";
    for (let i = 0; i < roomsTab.length; i++) {
    if (HouseId == roomsTab[i].HouseId){
        var house = searchObj("GuestHouses",HouseId);
            content=content + `<tr> 
            <td>${roomsTab[i].id}</td>
            <td>${roomsTab[i].Name}</td>
            <td>${house.Name}</td>
            <td>${roomsTab[i].price}</td>
            <td>${roomsTab[i].capacity}</td>
            <td>`
        if (user.role == "Owner"){
            if (house.ownerId == connectedUserId){ 
                content=content + `
                <button class="btn text-white" style="background-color:#0E2E50; border-color:#0E2E50" onclick="deleteByIndex('Rooms',${i})">Delete</button>
                <button class="btn btn-primary" onclick="modif(${roomsTab[i].id})">Edit</button>
                </tr> `
           } 
        }  
        if (user.role == "admin"){
            content=content + `
            <button class="btn text-white" style="background-color:#0E2E50; border-color:#0E2E50" onclick="deleteByIndex('Rooms',${i})">Delete</button>
            </tr> `
        }
    }
}
document.getElementById("myRooms").innerHTML=content;
}
function modifRoom(id){
    localStorage.setItem("editedRoom",id); 
    location.replace("editRoom.html");  
}
function editRoom(){ 
    var roomsTab= JSON.parse(localStorage.getItem("Rooms"));
    var editedRoom= localStorage.getItem("editedRoom");
    var content;
    for (let i = 0; i < roomsTab.length; i++) {
        if(editedRoom==roomsTab[i].id){          
        content=` <div class="col-lg-6 offset-lg-3">
        <div class="contact-form">
            <div class="row login-form">
                <div class="col-lg-12 form-group">
                    <input type="text" id ="updateRoomName" value="${roomsTab[i].Name}">
                </div>
                <div class="col-lg-12 form-group">
                    <input type="number" id ="updateRoomPrice" value="${roomsTab[i].price}">
                </div>
                <div class="col-lg-12 form-group">
                    <input type="number" id ="updateRoomCapacity" value="${roomsTab[i].capacity}">
                </div>
                <div class="col-lg-12 form-group">
                    <input type="text" id ="updateRoomDescription" value="${roomsTab[i].description}">
                </div>
                <div class="col-lg-12 form-group">
                    <input type="url" id ="updateRoomImage" value="${roomsTab[i].imageURL}">
                </div>
                <div class="col-lg-12 mb-5">
                    <button type="submit" value="submit" class="btn-block btn-lg gradient-custom-4 text-body" onclick="updateGuestHouse(${roomsTab[i].id})">ADD</button>
                </div>
            </div>
        </div>
    </div>`
        }
    }
    document.getElementById("roomEdited").innerHTML= content; 
}
function updateRoom(id){
    var roomsTab= JSON.parse(localStorage.getItem("Rooms"));
    var newRoomName= document.getElementById("updateRoomName").value;
    var newRoomPrice = document.getElementById("updateRoomPrice").value;
    var newRoomCapacity= document.getElementById("updateRoomCapacity").value;
    var newRoomDescription = document.getElementById("updateRoomDescription").value;
    var newRoomImage = document.getElementById("updateRoomImage").value;
    for (let i = 0; i < roomsTab.length; i++) {
        if (roomsTab[i].id==id){
            roomsTab[i].Name=newRoomName;
            roomsTab[i].price=newRoomPrice;
            roomsTab[i].capacity=newRoomCapacity;
            roomsTab[i].description=newRoomDescription;
            roomsTab[i].imageURL=newRoomImage;
        localStorage.setItem("Rooms",JSON.stringify(roomsTab));
        location.reload();
        }
    }
}

function Reservations(){
    var reservationsTab=JSON.parse(localStorage.getItem("reservations") || "[]");
    var connectedUserId=localStorage.getItem("connectedUser");
    var user = searchObj("users",connectedUserId);
    var innerReserv=""; 
    for (let i = 0; i < reservationsTab.length; i++) {
        var guestHouse = searchObj("GuestHouses",reservationsTab[i].idHouse);
        var room = searchObj("Rooms",reservationsTab[i].idRoom);
        var client = searchObj("users",reservationsTab[i].clientId);
        if (user.role == "Owner"){
            if (guestHouse.ownerId == connectedUserId){
                innerReserv = innerReserv+ `<tr> 
                <td>${reservationsTab[i].id}</td>
                <td>${client.fName}</td>
                <td>${client.lName}</td>
                <td>${guestHouse.Name}</td>
                <td>${room.Name}</td>
                <td>${reservationsTab[i].checkIn}</td>
                <td>${reservationsTab[i].checkOut}</td>
                <td>${reservationsTab[i].guestsNumber}</td>
                <td>
                <button class="btn text-white w-100" style="background-color:#0E2E50; border-color:#0E2E50" onclick="deleteByIndex('reservations',${i})">Delete</button>
                </td>
                </tr>`
            }
        } 
        if (user.role == "client"){
            if (reservationsTab[i].clientId == connectedUserId){
                innerReserv = innerReserv+ `<tr> 
                <td>${reservationsTab[i].id}</td>
                <td>${client.fName}</td>
                <td>${client.lName}</td>
                <td>${guestHouse.Name}</td>
                <td>${room.Name}</td>
                <td>${reservationsTab[i].checkIn}</td>
                <td>${reservationsTab[i].checkOut}</td>
                <td>${reservationsTab[i].guestsNumber}</td>
                <td>
                <button class="btn text-white w-100" style="background-color:#0E2E50; border-color:#0E2E50" onclick="cancelReservByIndex('reservations',${i})">Cancel</button>
                </td>
                </tr>`
            }
        }   
        if (user.role == "admin"){
            innerReserv = innerReserv+ `<tr> 
            <td>${reservationsTab[i].id}</td>
            <td>${client.fName}</td>
            <td>${client.lName}</td>
            <td>${guestHouse.Name}</td>
            <td>${room.Name}</td>
            <td>${reservationsTab[i].checkIn}</td>
            <td>${reservationsTab[i].checkOut}</td>
            <td>${reservationsTab[i].guestsNumber}</td>
            <td>
            <button class="btn text-white w-100" style="background-color:#0E2E50; border-color:#0E2E50" onclick="deleteByIndex('reservations',${i})">Delete</button>
            </td>
            </tr>`
        }  
    }
document.getElementById("allReservation").innerHTML=innerReserv;
}
// function Reservations2(){
//     var reservationsTab=JSON.parse(localStorage.getItem("reservations") || "[]");
//     var connectedUserId=localStorage.getItem("connectedUser");
//     var user = searchObj("users",connectedUserId);
//     var innerReserv="";
//     for (let i = 0; i < reservationsTab.length; i++) {
//         var room = searchObj("Rooms",reservationsTab[i].idRoom);
//         var guestHouse = searchObj("GuestHouses",reservationsTab[i].idHouse);
//         var client = searchObj("users",reservationsTab[i].clientId);
//         innerReserv = innerReserv+ `<tr> 
//         <td>${reservationsTab[i].id}</td>
//         <td>${client.fName}</td>
//         <td>${client.lName}</td>
//         <td>${guestHouse.Name}</td>
//         <td>${room.Name}</td>
//         <td>${reservationsTab[i].checkIn}</td>
//         <td>${reservationsTab[i].checkOut}</td>
//         <td>${reservationsTab[i].guestsNumber}</td>
//         <td class="d-flex">` 
//             if (user.role == "Owner"){
//                 if (guestHouse.ownerId == connectedUserId){
//                 innerReserv = innerReserv+ `
//                 <button class="btn text-white w-100" style="background-color:#0E2E50; border-color:#0E2E50" onclick="cancelReservByIndex('reservations',${i})">Cancel</button>
//                 </td>
//                 </tr>`
//                 }
//             }
//             if (user.role == "client"){
//                 if (reservationsTab[i].clientId == connectedUserId){
//                 innerReserv = innerReserv+ `
//                 <button class="btn text-white w-100" style="background-color:#0E2E50; border-color:#0E2E50" onclick="cancelReservByIndex('reservations',${i})">Cancel</button>
//                 </td>
//                 </tr>`
//                 }
//             }
//             if (user.role == "admin"){
//                 innerReserv = innerReserv+ `<tr> 
//                 <button class="btn text-white w-100" style="background-color:#0E2E50; border-color:#0E2E50" onclick="deleteByIndex('reservations',${i})">Delete</button>
//                 </td>
//                 </tr>`
//             }  
//     }
// document.getElementById("allReservation").innerHTML=innerReserv;
// }
// function usersDetails(){
//     var usersTab= JSON.parse(localStorage.getItem("users")); 
//     var content="";
//     for (let i = 0; i < usersTab.length; i++) {
//         if(usersTab[i].role!="admin"){
//             content=content+ `<tr> 
//             <td>${usersTab[i].id}</td>
//             <td>${usersTab[i].fName}</td> 
//             <td>${usersTab[i].lName}</td>
//             <td>${usersTab[i].email}</td>
//             <td>${usersTab[i].tel}</td>
//             <td>${usersTab[i].pwd}</td>
//             <td>${usersTab[i].role}</td>
//             <td>${usersTab[i].statu}</td>
//             <td class="d-flex">` 
//             if (usersTab[i].role=="Owner" && usersTab[i].statu=="Nok"){
//             content=content+ `
//                 <button class="btn btn-danger mx-auto text-white" style="background-color:#0E2E50; border-color:#0E2E50"onclick="deleteByIndex('users',${i})">Delete</button>
//                 <button class="btn btn-success mx-auto text-white" style="background-color:#DCA73A; border-color:#DCA73A" onclick="validateOwner(${i})">validate</button>
//                 <button class="btn text-white" style="background-color:	#262626; border-color:#262626" onclick="declineOwner(${i})">decline</button>
//                 <td>
//                 <tr>`
//             }
//             else{
//                 content=content+ `
//                 <button class="btn btn-danger mx-auto text-white" style="background-color:#0E2E50; border-color:#0E2E50" onclick="deleteByIndex('users',${i})">Delete</button>
//                 <button class="btn text-white" style="background-color:	#262626; border-color:#262626" onclick="declineOwner(${i})">decline</button>
//                 <td>
//                 <tr>` 
//             }  
//         }
//     }
// document.getElementById("allUsers").innerHTML=content;
// }
function ownersList(){
    var usersTab= JSON.parse(localStorage.getItem("users")); 
    var content="";
    for (let i = 0; i < usersTab.length; i++) {
        if(usersTab[i].role=="Owner"){
            content=content+ `<tr> 
            <td>${usersTab[i].id}</td>
            <td>${usersTab[i].fName}</td> 
            <td>${usersTab[i].lName}</td>
            <td>${usersTab[i].email}</td>
            <td>${usersTab[i].tel}</td>
            <td>${usersTab[i].pwd}</td>
            <td>${usersTab[i].role}</td>
            <td>${usersTab[i].statu}</td>
            <td class="w-100">`
            if(usersTab[i].statu=="Nok"){
            content=content+ `<button class="btn btn-danger text-white" style="background-color:#0E2E50; border-color:#0E2E50"onclick="deleteByIndex('users',${i})">Delete</button>
            <button class="btn btn-success mx-auto text-white" style="background-color:#DCA73A; border-color:#DCA73A" onclick="validateOwner(${i})">validate</button>
            <button class="btn text-white" style="background-color:	#262626; border-color:#262626" onclick="declineOwner(${i})">decline</button>
            <tr>`
            }
            else{
            content=content+ `
            <button class="btn btn-danger mx-auto text-white" style="background-color:#0E2E50; border-color:#0E2E50" onclick="deleteByIndex('users',${i})">Delete</button>
            <button class="btn text-white" style="background-color:	#262626; border-color:#262626" onclick="declineOwner(${i})">decline</button>
            <tr>` 
            }  
        }
    }
document.getElementById("allOwners").innerHTML=content;
}
function clientsList(){
    var usersTab= JSON.parse(localStorage.getItem("users")); 
    var content="";
    for (let i = 0; i < usersTab.length; i++) {
        if(usersTab[i].role =="client"){
            content=content+ `<tr> 
            <td>${usersTab[i].id}</td>
            <td>${usersTab[i].fName}</td> 
            <td>${usersTab[i].lName}</td>
            <td>${usersTab[i].email}</td>
            <td>${usersTab[i].tel}</td>
            <td>${usersTab[i].pwd}</td>
            <td>${usersTab[i].role}</td>
            <td>${usersTab[i].statu}</td>
            <td>
            <button class="btn btn-danger mx-auto text-white" style="background-color:#0E2E50; border-color:#0E2E50" onclick="deleteByIndex('users',${i})">Delete</button>
            <button class="btn text-white" style="background-color:	#262626; border-color:#262626" onclick="declineOwner(${i})">decline</button>
            <tr>` 
        }   
    }
document.getElementById("allClients").innerHTML=content;
}
function validateOwner(index){
    var usersTab = JSON.parse(localStorage.getItem("users"));
        usersTab[index].statu="ok";
        localStorage.setItem("users",JSON.stringify(usersTab));
        location.reload();
}
function declineOwner(index){
    var usersTab = JSON.parse(localStorage.getItem("users"));
        usersTab[index].statu="Nok";
        localStorage.setItem("users",JSON.stringify(usersTab));
        location.reload();
}
function signOut(){
    localStorage.removeItem("connectedUser");
    location.replace("Home.html");
}
function leaveDashboard(){
    location.replace("ownerSpace.html");
}
function goToSearch(){location.replace("searchPage.html");}
function searchHouseBy(){ 
    var searchInput= document.getElementById("searchHouseInput").value;
    if (searchInput.length == 0){
    document.getElementById("errorSearch").innerHTML ="please fill in this field";}
    else {localStorage.setItem("searchedHouse",searchInput);
    location.replace("displaysearchedHouse.html");}
}
function searchedHouse(){
    var searchHouse= localStorage.getItem("searchedHouse");
    var GuestHousesTab= JSON.parse(localStorage.getItem("GuestHouses"));
    var content="";
    for (let i = 0; i < GuestHousesTab.length; i++) {
        if(searchHouse.toLowerCase()==(GuestHousesTab[i].Name).toLowerCase() || searchHouse.toLowerCase()==(GuestHousesTab[i].adress).toLowerCase() || searchHouse.toLowerCase()==(GuestHousesTab[i].city).toLowerCase()){
        content=content+`<div class="col-lg-3 col-md-2 mb-4">
        <div class="hp-room-item set-bg" data-setbg="${GuestHousesTab[i].imageURL}">
            <div class="hr-text">
                <h3 class="text-body-secondary">${GuestHousesTab[i].Name}</h3>
                <table>
                    <tbody>
                        <tr>
                            <td class="r-o">Address:</td>
                            <td>${GuestHousesTab[i].adress}</td>
                        </tr>
                        <tr>
                            <td class="r-o">City:</td>
                            <td>${GuestHousesTab[i].city}</td>
                        </tr>
                        <tr>
                            <td class="r-o">Description:</td>
                            <td>${GuestHousesTab[i].description}</td>
                        </tr>
                        <tr>
                            <td class="r-o">Room Number:</td>
                            <td>${GuestHousesTab[i].roomNumber}</td>
                        </tr>
                    </tbody>
                </table>
                <a href="#" class="primary-btn" onclick="goToObj('displayedGuestHouse',${GuestHousesTab[i].id},'ourRooms.html')">More Details</a>
            </div>
        </div>
    </div>`     
    }
}
document.getElementById("searchHouse").innerHTML= content; 
}
// fcts pour la validation
function checkSize(ch,x){
    return(ch.length>=x);
}
function checkTel(ch){
    return(ch.length==8);
}
function existEmail(T,ch){
    var test=false;
    for (let i = 0; i < T.length; i++) {
        if(T[i].email==ch){
            test=true;
            break;
        }   
    }
    return(test);
}
function checkLength(ch){
    return (ch.length!=0)
}
function checkRoomNumber(x){
    return(x<5);
}
function comparePwd(ch1,ch2){
    return(ch1==ch2)
}
function checkPrice(x){
    return(x>0);
}
function CountRoomsNumber(id) { 
var roomsTab= JSON.parse(localStorage.getItem("Rooms") || "[]");
var n=0;
    if (roomsTab.length == 0){
        return(0);
    }
    for (let i = 0; i < roomsTab.length; i++) {
        if(roomsTab[i].HouseId==id){
            n=n+1;
        }     
    }
 return(n);   
}
function checkDateInterval( checkIn1, checkOut1, checkIn2, checkOut2) {
    var newCheckIn1 = new Date(checkIn1).getTime;
    var newCheckOut1 = new Date(checkOut1).getTime
    var newCheckIn2 = new Date(checkIn2).getTime;
    var newCheckOut2 = new Date(checkOut2).getTime;
    // if (new Date(checkOut1) < new Date(checkIn2) || new Date(checkOut2) < new Date(checkIn1)) {
    //   return false;
    // }
    // return true;
    return(newCheckIn1  > newCheckOut1 || newCheckIn2  > newCheckOut2);
}
function compare(x,y){
    return(x>y);
}
function testing(ch){
    return(ch==true);
}
//fonctions generiques
//retourner un objet d'un tableau T
function searchObj(key,id){
    var findedObj;
    var T=JSON.parse(localStorage.getItem(key) || "[]");
    for (let i = 0; i < T.length; i++) {
        if(T[i].id==id){
            findedObj= T[i];
            break;
        }
    }
    return(findedObj);
}
function innerError(validTest, id, errorMsg) {
    if (validTest) {
      document.getElementById(id).innerHTML = errorMsg;
      document.getElementById(id).style.color="red";
    } 
    else {document.getElementById(id).innerHTML = "";}
}
function error(validTest, idInput, idError, errorMsg) {
    if (!validTest) {document.getElementById(idInput).style.border = "1px solid red";
        document.getElementById(idError).innerHTML = errorMsg;
        document.getElementById(idError).style.Color="red";
    } 
    else {document.getElementById(idError).innerHTML = ""; }
}
function goToObj(key,id,pageHtml){
    localStorage.setItem(key,id);
    location.replace(pageHtml);  
}
// function displayRoom(id){
//     localStorage.setItem("displayedRoom",id); 
//     location.replace("room-details.html");
// }
function deleteById(key,id) {
    var T = JSON.parse(localStorage.getItem(key));
    var position
    for (let i = 0; i < T.length; i++) {
      if (T[i].id === id) {
        position = i
      }
    }
    T.splice(position, 1)
    localStorage.setItem(key, JSON.stringify(T))
    window.location.reload()
}

function deleteByIndex(key,index){
    var T = JSON.parse(localStorage.getItem(key));
        T.splice(index,1);
        localStorage.setItem(key,JSON.stringify(T));
        location.reload();
}
function cancelReservByIndex(key,index){
    var T = JSON.parse(localStorage.getItem(key));
        T.splice(index,1);
        location.reload();
}