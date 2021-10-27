function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if(Client.checkForLink(formText)){
        document.getElementById('results').innerHTML="";
        document.getElementById('name').value = "Working on " + formText
        document.getElementById('name').disabled = true;
        document.getElementById('button').disabled = true;
        document.getElementsByTagName("body")[0].style.cursor='wait';
        console.log("::: Form Submitted :::")
        fetch(`http://localhost:8081/runAnalysis/${formText}`)
        .then(res => res.json())
        .then(function(res) {
            if(res.status.code != '0' && res.status.msg !== 'OK')
            {
                alert("Error in communication between provided Link and our analysis host!!")
                document.getElementById('name').value = formText
                document.getElementById('name').disabled = false;
                document.getElementById('button').disabled = false;
                document.getElementsByTagName("body")[0].style.cursor='default';
            }
            else{
                let agreement = document.createElement('div');
                let subjectivity = document.createElement('div');
                let confidence = document.createElement('div');
                let irony = document.createElement('div');
                agreement.innerHTML = "Agreement:  " + res.agreement;
                subjectivity.innerHTML = "Subjectivity:  " + res.subjectivity;
                confidence.innerHTML =  "Confidence:  " + res.confidence;
                irony.innerHTML = "Irony:  " + res.irony;
                document.getElementById('results').appendChild(irony);
                document.getElementById('results').appendChild(confidence);
                document.getElementById('results').appendChild(subjectivity);
                document.getElementById('results').appendChild(agreement);

                document.getElementById('name').value = formText
                document.getElementById('name').disabled = false;
                document.getElementById('button').disabled = false;
                document.getElementsByTagName("body")[0].style.cursor='default';
            }
        }).catch((error)=>{
            console.log(error);
            document.getElementById('name').value = formText
            document.getElementById('name').disabled = false;
            document.getElementById('button').disabled = false;
            document.getElementsByTagName("body")[0].style.cursor='default';
            alert("Timed out!!")
        });
    }
}

export { handleSubmit }
