function sendMail(){
    var params ={
        name:document.getElementById("name").value,
        name:document.getElementById("email").value,
        name:document.getElementById("message").value,
    };
    const serviceID="service_j27l8va";
    const templateID="template_5eos4yn"
    emailjs.send(serviceID,templateID,params)
    .then(
        res =>{
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            document.getElementById("message").value="";
            console.log(res);
            alert("your message send successfully");
})
.catch((err) => console.log(err));

}