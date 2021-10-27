function checkForLink(inputText) {
    console.log("::: Running checkForLink :::", inputText);
    let linkRegex = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/);

    let testCheckResult = linkRegex.test(inputText);

    if(!testCheckResult) {
        alert("Please make sure you type the full address")
    }
    return testCheckResult;
}

export { checkForLink }
