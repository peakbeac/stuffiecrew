//MODIFIED BY: Peak Beacom
//DATE MODIFIED: 01/20/2025

let user;
let pass;

const tUser = t;
const tPass = p;

const pUser = peakbeac;
const pPass = SuperSecretPassword;

const dUser = danmanne;
const dPass = Admin;

const mUser = matthew;
const mPass = Admin;

const eUser = bravestever;
const ePass = lalala;

const aUser = ariafasano;
const aPass = lmp;

const sUser = suhrithmamilla;
const sPass = skull;

const User7 = user7;
const Pass7 = user7;

function checkPW()
{
    if (user = tUser)
    {
        if (pass = tPass)
        {
            prompt("Welcome, tester");
            openHTML("testLP.html");
        }
        else
        {
            prompt("Password incorrect. Please try again", pass);
            checkPW();
        }
    }
    else if (user = pUser)
    {
        if (pass = tPass)
        {
            prompt("Welcome, tester");
            openHTML("peakLP.html");
        }
        else
        {
            prompt("Password incorrect. Please try again", pass);
            checkPW();
        }
    }
    else if (user = dUser)
    {
        if (pass = dPass)
        {
            prompt("Welcome, tester");
            openHTML("danielLP.html");
        }
        else
        {
            prompt("Password incorrect. Please try again", pass);
            checkPW();
        }
    }
    else if (user = mUser)
    {
        if (pass = mPass)
        {
            prompt("Welcome, tester");
            openHTML("matthewLP.html");
        }
        else
        {
            prompt("Password incorrect. Please try again", pass);
            checkPW();
        }
    }
    else if (user = aUser)
    {
        if (pass = aPass)
        {
            prompt("Welcome, tester");
            openHTML("ariaLP.html");
        }
        else
        {
            prompt("Password incorrect. Please try again", pass);
            checkPW();
        }
    }
    else if (user = eUser)
    {
        if (pass = ePass)
        {
            prompt("Welcome, tester");
            openHTML("everLP.html");
        }
        else
        {
            prompt("Password incorrect. Please try again", pass);
            checkPW();
        }
    }
    else if (user = sUser)
    {
        if (pass = sPass)
        {
            prompt("Welcome, tester");
            openHTML("suhrithLP.html");
        }
        else
        {
            prompt("Password incorrect. Please try again", pass);
            checkPW();
        }
    }
    else if (user = User7)
    {
        if (pass = Pass7)
        {
            prompt("Welcome, tester");
            openHTML("testLP.html");
        }
        else
        {
            prompt("Password incorrect. Please try again", pass);
            checkPW();
        }
    }
}

openHTML(script)
{
    xhr.open(script);
}

prompt("Enter your username", user);

prompt("Enter your password", pass);

checkPW();