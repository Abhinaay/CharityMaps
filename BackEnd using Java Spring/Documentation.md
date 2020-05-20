# Rest APIs for CharityMaps

We initialised our spring project using **IBM Cloud Starter Kit** which made our work lot easier. A repository has been created in GitLabs, which we cloned to our local system using ssh and started our development.

## Database

We used **IBM Cloud DB2** as a database for our project.

Following dependencies are required by the spring project to connect to db2.

### A JPA Starter - 
```
<dependency>
   <groupId>org.springframework.boot</groupId>>
   <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```

### DB2 JDBC Driver (JCC) Dependency -
```
<dependency>
  <groupId>com.ibm.db2</groupId>
  <artifactId>jcc</artifactId>
  <version>11.5.0.0</version>
</dependency>
```

#### Note: All other required dependencies were already added to the project as we initialized using IBM Cloud Starter Kit.


## Configure Spring Data for the DB2 Instance

Spring needs to be told how to talk to the database. For that purpose, add the following properties to the application.properties file:
```
spring.datasource.url=jdbc:db2://mydb2host:50000/mydb2databasename
spring.datasource.username=mydb2username
spring.datasource.password=mydb2password
```
Remember to alter the values to match the location and credentials for your DB2 instance.

## Creating JPA Classes

In the same directory as the application class, we created a directory for the JPA classes.

In the jpa directory, created the class that represents a table row. This class has same name as that of our table.

In the same directory, we created a Repository interface that allowes us to access the data. 
