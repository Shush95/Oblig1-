package WebprogOblig;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;
@RestController
public class KinoController {
    ArrayList<Kinobilleter> allebilleter = new ArrayList<>();
    @PostMapping("/saveTicket")
    public ArrayList<Kinobilleter>oneTicket(Kinobilleter innCustomer){
        allebilleter.add(innCustomer);
        return allebilleter;

}
@GetMapping("/delete")
public void DeleteAll(){
    allebilleter.clear();
}
}
