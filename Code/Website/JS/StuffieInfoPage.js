var firstName = Label5.Text;

if (firstName === null)
{
    Label1.Text = "No Stuffie Found. Try again later"
    image.src = "/Code/html/Images/Unknown.jpg";
}
else
{
    image.src = "/Code/html/Images/" + firstName + ".jpg";
}