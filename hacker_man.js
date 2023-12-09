
// Fetch all the Id's from html.
let title = document.getElementById("title")
let report1 = document.getElementById("report1")
let report2 = document.getElementById("report2")
let report3 = document.getElementById("report3")
let report4 = document.getElementById("report4")
let report5 = document.getElementById("report5")
let report6 = document.getElementById("report6")
let report7 = document.getElementById("report7")
let report8 = document.getElementById("report8")
let report9 = document.getElementById("report9")
let report10 = document.getElementById("report10")
const backgroundMusic = document.getElementById('backgroundMusic');

// toggle title.
setInterval(()=>{
    document.querySelector("#title").classList.toggle("title-off")
},1000)

const hack = async ()=>{

    return new Promise((resolve, reject)=>{
    
    // Entering the name of the person who's account have to be hack
    backgroundMusic.addEventListener('ended', () => {
        backgroundMusic.currentTime = 0; // Reset the playback to the beginning
        backgroundMusic.play(); // Start playing again
    });
    let id_tobe_hacked = prompt("Enter the name of the person whom instagram id should be hacked: ")
    console.log(id_tobe_hacked)

    // Check weather the name is string or in number. If there will be number then no any hacking process will take place
  if(!isNaN(id_tobe_hacked)){

    reject(0 + "Please enter a valid name")
    setInterval(()=>{
        report10.innerHTML = "Error: Please try again after some time...."
        document.querySelector("#report10").classList.toggle("report-off")
    },1000)

  }else
  {
    resolve(1)
    setTimeout(()=>{
        report1.innerHTML = " - connecting to the server.....please wait...."
    },2000)
    setTimeout(()=>{
        report2.innerHTML = " - connected successfully."
    },4000)
    setTimeout(()=>{
        report3.innerHTML = " - fetching " + id_tobe_hacked +"'s " + "instagram account detail...please wait..."
    },7000)
    setTimeout(()=>{
        report4.innerHTML = " - detail fetched successfully."
    },11000)
    setTimeout(()=>{
        report5.innerHTML = " - fetching username of " + id_tobe_hacked +"'s instgram account...." + "please wait...."
    },16000)
    setTimeout(()=>{
        report6.innerHTML = " - username fetched successfully."
    },20000)
    setTimeout(()=>{
        report7.innerHTML = " - fetching password of " + id_tobe_hacked +"'s instgram account...." + "please wait..."
    },25000)
    setTimeout(()=>{
        report8.innerHTML = " - password fetched successfully."
    },29000)
    setTimeout(()=>{
        report9.innerHTML = " - checking authentication for username and password of " + id_tobe_hacked +"'s instgram account...." + "please wait..."
    },33000)
    setTimeout(()=>{
        report10.innerHTML = " account hacked successfully."
        backgroundMusic.play();

    },40000)

    // Showing the message of account hacked by toggling it with red color.
    setInterval(()=>{
        document.querySelector("#report10").classList.toggle("report-off")
    },1000)
  }

  setTimeout(() => {
    //Letters and Numbers to be genereted in password
    let letters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 
    let password = Math.floor(Math.random()*10)
    
    for (let i = 0; i < 10; i++) 
        password += letters[(Math.floor(Math.random() * 62))]; 
        console.log("Username is hidden due to some security reason")
        console.log("The account is hacked of: " + id_tobe_hacked)
        console.log("user-password is: " + password);
      },40000)
  });
}
            // process of hacking with seconds.

const hacking_id = async()=>{
    let hacked_id = await hack()
    console.log("Hacked id is: " + hacked_id)
}

hacking_id()