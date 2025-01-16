let enteredUser;
let enteredPass;


const uTUser = t;
const uTPass = p;


const u1User = peakbeac;
const u2User = mistaMoo;
const u3User = lborgman;
const u4User = smamilla;
const u5User = afasano;
const u6User = user6;

const u1Pass = SuperSecretPassword;
const u2Pass = ILoveKoal;
const u3Pass = MauiDog;
const u4Pass = code;
const u5Pass = CharlieDogg;
const u6Pass = u6;

function checkPassword()
{
    if (enteredUser == uTUser)
    {
        if (enteredPass == uTPass)
        {
            prompt('Welcome, Tester.');
            loadHTML('TestLandingPage.html');
        }
        else
        {
            prompt('Password is incorrect. Please check password and try again.', enteredPass);
            checkPassword();
        }
    }   
    else if (enteredUser == u2User)
    {
        if (enteredPass == u2Pass)
        {
            prompt('Welcome, Everest Beacom.');
            loadHTML('EBeacLandingPage.html');
        }
        else
        {
            prompt('Password is incorrect. Please check password and try again.', enteredPass);
            checkPassword();
        }
    }
    else if (enteredUser == u1User)
    {
        if (enteredPass == u1Pass)
        {
            prompt('Welcome, Peak Beacom.');
            loadHTML('PBeacLandingPage.html');
        }
        else
        {
            prompt('Password is incorrect. Please check password and try again.', enteredPass);
            checkPassword();
        }
    }       
    else if (enteredUser == u3User)
    {
        if (enteredPass == u3Pass)
        {
            prompt('Welcome, Landon Borgman.');
            loadHTML('LBorgLandingPage.html');
        }
        else
        {
            prompt('Password is incorrect. Please check password and try again.', enteredPass);
            checkPassword();
        }
    }         
    else if (enteredUser == u4User)
    {
        if (enteredPass == u4Pass)
        {
            prompt('Welcome, Suhrith Mamilla.');
            loadHTML('SMamiLandingPage.html');
        }
        else
        {
            prompt('Password is incorrect. Please check password and try again.', enteredPass);
            checkPassword();
        }
    }      
    else if (enteredUser == u5User)
    {
        if (enteredPass == u5Pass)
        {
            prompt('Welcome, Aria Fasano.');
            loadHTML('AFasaLandingPage.html');
        }
        else
        {
            prompt('Password is incorrect. Please check password and try again.', enteredPass);
            checkPassword();
        }
    }      
    else if (enteredUser == u6User)
    {
        if (enteredPass == u6Pass)
        {
            prompt('LEAVE. NOW.');
        }
        else
        {
            prompt('Password is incorrect. Please check password and try again.', enteredPass);
            checkPassword();
        }
    }      
}


function loadHTML(script)
{
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("target").innerHTML = this.responseText;
        }
    };
    xhr.open("GET", script, true);
    xhr.send();
}


prompt('Enter your username', enteredUser);

prompt('Enter your password', enteredPass);

checkPassword();