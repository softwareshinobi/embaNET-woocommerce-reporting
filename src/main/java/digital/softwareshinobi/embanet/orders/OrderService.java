package digital.softwareshinobi.embanet.orders;

import jakarta.transaction.Transactional;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional(rollbackOn = {SQLException.class})
public class OrderService {

    OrderRepository ordersRepository;

    @Autowired
    public OrderService(OrderRepository ordersRepository) {

        this.ordersRepository = ordersRepository;

    }

    public List<Order> findAll() {

        return this.ordersRepository.findAll();

    }

    public Order findById(Long id) {

        return this.ordersRepository.findById(id).orElse(null);

    }

    public List<Order> findByToday() {

        Date t = dateDayBegin();

        System.out.println("tracking date: " + t);

        List<Order> orderList = this.findAll();

        System.out.println("userStoryList / ");

        System.out.println(orderList);

        List<Order> orderListfdsfsd = new ArrayList();

        for (Order order : orderList) {

            System.out.println("order / " + order);
            System.out.println("date: " + order.getDate());

            boolean isAfter = t.before(order.getDate());
            System.out.println("isAfter: " + isAfter);

            if (isAfter) {
                System.out.println("adding...");
                orderListfdsfsd.add(order);
            }
        }

        return orderListfdsfsd;

    }

    private Date dateDayBegin() {
        // Create a Calendar instance in GMT timezone
        Calendar calendar = Calendar.getInstance(TimeZone.getTimeZone("GMT"));
        // Set time to 5 AM
        calendar.set(Calendar.HOUR_OF_DAY, 5);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);
        calendar.set(Calendar.MILLISECOND, 0);
        calendar.add(Calendar.DAY_OF_YEAR, -1);
        // Create a Date object from the calendar
        Date date = calendar.getTime();

        System.out.println(date); // Output will be in your local timezone
        return date;
    }
}
