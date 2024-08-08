# woocommerce-reporting-apis
spring apis to report on a woo commerce  store

## release 1

### security

* readonly user at woocommerce database (ro @ mariadb)
* readonly connection to woocommerce database (ro @ spring config)

### orders

* list orders in the system
* list all orders over rolling 8 day period
* list all orders occuring today (BOG timezone)
* calculate total revenue (today, 8 days, lifetime)
