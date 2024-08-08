package digital.softwareshinobi.embanet.orders;

import jakarta.transaction.Transactional;
import java.sql.SQLException;
import java.util.List;
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

    public Order save(Order order) {

        return this.ordersRepository.save(order);

    }

    public List< Order> findAll() {

        return this.ordersRepository.findAll();

    }

    public Order findById(Long id) {

        return this.ordersRepository.findById(id).orElse(null);

    }

    public void delete(Long id) {

        this.ordersRepository.deleteById(id);

    }

}
