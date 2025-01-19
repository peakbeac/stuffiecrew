//MODIFIED BY: Peak Beacom
//DATE MODIFIED: 01/18/2025

using System;
using System.Data.SqlClient;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{
    int id = 1;

    protected void PageLoad(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            BindData();
        }
    }

    private void BindData()
    {
        string connectionString = "Server = stufielog-server.database.windows.net; Database = stuffielog-database; User ID = stuffielog-server-admin; Password = KbGyOFO4WGq5sn1$;";

        using (SqlConnection connection = new SqlConnection(connectionString))
        {
            string query = "select * from dbo.AllStuffies where id = ", id;

            using (SqlCommand command = new SqlCommand(query, connection))
            {
                connection.Open();
                SqlDataReader reader = command.ExecuteReader();

                if (reader.Read())
                {
                    string firstName = reader["FirstName"].ToString();
                    string lastName = reader["LastName"].ToString();
                    string dob = reader["DOB"].ToString();
                    string animalType = reader["Animal_Type"].ToString();
                    string bio = reader["Bio"].ToString();
                    string address1 = reader["Address1"].ToString();
                    string address2 = reader["Address2"].ToString();
                    string street = reader["Street"].ToString();
                    string city = reader["City"].ToString();
                    string state = reader["State"].ToString();
                    string zip = reader["ZIP"].ToString();

                    Label1.Text = "Name: " + firstName + " " + lastName;
                    Label2.Text = "Date of Birth: " + dob;
                    Label3.Text = "Address: " + address1 + " " + address2 + " " + street + " " + city + " " + state + " " + zip;
                    Label4.Text = "About me: " + bio;
                    Label5.Text = firstName;
                }
                else
                {
                    Label1.Text = "No data found on this stuffie"
                }

                reader.Close()
            }
        }
    }
}