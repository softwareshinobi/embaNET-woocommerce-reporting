package digital.softwareshinobi.embanet.orders;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrdersRepository extends JpaRepository<Order, Long> {

    List<Order> findByIdAllIgnoreCase(Long id);

}
