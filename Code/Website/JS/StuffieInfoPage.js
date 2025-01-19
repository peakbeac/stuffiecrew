var firstName = Label5.Text;

if (firstName === null)
{
    image.src = "/Code/html/Images/Unknown.jpg";
}
else
{
    image.src = "/Code/html/Images/" + firstName + ".jpg";
}