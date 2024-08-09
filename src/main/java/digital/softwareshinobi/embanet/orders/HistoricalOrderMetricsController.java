package digital.softwareshinobi.embanet.orders;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("orders")
public class HistoricalOrderMetricsController {

    @Autowired
    OrderService orderService;

    public HistoricalOrderMetricsController() {

        System.out.println("## ");
        System.out.println("## init > Historical Order Metrics API");
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

    @GetMapping("count")
    public Integer countOrders() {

        System.out.println("enter > countOrders");

        List<Order> orderList = this.orderService.findAll();

        System.out.println("userStoryList / ");

        System.out.println(orderList);

        int count = orderList.size();

        System.out.println("returning: " + count);

        System.out.println("exit < countOrders");

        return count;

    }
    @GetMapping("count/customers")
    public Integer countCustomers() {

        System.out.println("enter > countCustomers");

        List<Order> orderList = this.orderService.findByToday();

        System.out.println("userStoryList / ");

        System.out.println(orderList);

        Set<String> uniqueCustomer = new HashSet();

        for (Order order : orderList) {
uniqueCustomer.add(order.getBilling_email());
//            sum = sum + order.getTotal_amount();

        }
 int count = uniqueCustomer.size();

        System.out.println("returning: " + count);

        System.out.println("exit < countCustomers");

        return count;

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

        int count = 0;

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
