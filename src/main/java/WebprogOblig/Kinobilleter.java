package WebprogOblig;

public class Kinobilleter {
    String movie, name, surname, phone, email;
    int quantity;
    public Kinobilleter(String movie, String name, String surname, String phone, String email, int quantity){
     this.movie = movie;
     this.name = name;
     this.surname = surname;
     this.email = email;
     this.phone = phone;
     this.quantity = quantity;
    }
    public  Kinobilleter(){ }
    public String getMovie(){
        return movie;
    }
    public void setMovie(String movie){
        this.movie = movie;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSs(String surname) {
        this.surname = surname;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}

