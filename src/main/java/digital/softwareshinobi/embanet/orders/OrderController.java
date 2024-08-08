package digital.softwareshinobi.embanet.orders;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("orders")
public class OrderController {

    @Autowired
    OrderService orderService;

    public OrderController() {

        System.out.println("## ");
        System.out.println("## init > Orders API");
        System.out.println("## ");

    }

    @GetMapping("")
    public List<Order> findAll() {

        System.out.println("enter > findAll");

        List<Order> orderList = this.orderService.findAll();

        System.out.println("userStoryList / ");

        System.out.println(orderList);

        System.out.println("exit < findAll");

        return orderList;

    }

    @GetMapping("revenue/total")
    public Double calculateTotalRevenue() {

        System.out.println("enter > calculateTotalRevenue");

        List<Order> orderList = this.orderService.findAll();

        System.out.println("userStoryList / ");

        System.out.println(orderList);

        Double sum = 0.0;

        for (Order order : orderList) {

            sum = sum + order.getTotal_amount();

        }

        System.out.println("returning: " + sum);

        System.out.println("exit < calculateTotalRevenue");

        return sum;
        
    }

        @GetMapping("revenue/average")
    public Double calculateAverageOrderSize() {

        System.out.println("enter > calculateAverageOrderSize");

        List<Order> orderList = this.orderService.findAll();

        System.out.println("userStoryList / ");

        System.out.println(orderList);

        double sum = 0.0;

        int count=0;
        
        for (Order order : orderList) {

            sum = sum + order.getTotal_amount();

            count++;
            
        }

        double avg = sum / count;
        
        System.out.println("returning: " + avg);

        System.out.println("exit < calculateAverageOrderSize");

        return avg;
        
    }
    
    @GetMapping("/{id}")
    Order findById(@PathVariable Long id) {

        return this.orderService.findById(id);

    }

    @GetMapping("health")
    public String health() {

        return "OK";

    }

}
