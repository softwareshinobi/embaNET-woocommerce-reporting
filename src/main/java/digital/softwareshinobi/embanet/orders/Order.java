package digital.softwareshinobi.embanet.orders;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.util.Date;
import lombok.NonNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Entity
@Table(name = "wp_wc_orders")
public class Order {

        private static Logger log = LoggerFactory.getLogger(Order.class);

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NonNull
    @Column(name = "billing_email")
    private String billing_email;

    //   @NonNull
    @Column(name = "total_amount")
    private Double total_amount;

    //  @NonNull
    @Column(name = "date_created_gmt")
    private Date date;

    /**
     * @return the id
     */
    public Integer getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * @return the billing_email
     */
    public String getBilling_email() {
        return billing_email;
    }

    /**
     * @param billing_email the billing_email to set
     */
    public void setBilling_email(String billing_email) {
        this.billing_email = billing_email;
    }

    /**
     * @return the total_amount
     */
    public Double getTotal_amount() {
        return total_amount;
    }

    /**
     * @param total_amount the total_amount to set
     */
    public void setTotal_amount(Double total_amount) {
        this.total_amount = total_amount;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Order{");
        sb.append("id=").append(id);
        sb.append(", billing_email=").append(billing_email);
        sb.append(", total_amount=").append(total_amount);
        sb.append(", date=").append(date);
        sb.append('}');
        return sb.toString();
    }



}
