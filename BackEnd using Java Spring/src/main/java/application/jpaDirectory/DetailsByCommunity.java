package application.jpaDirectory;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table
public class DetailsByCommunity {
// It is an Entity Class.
// Id Annotation states that the field works like a primary key.
// Not Blank Annotation is used to create a validation for empty fields. It states that blank entries are not valid in the table.
// Lob Annotation states that the field can store large number of characters.
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank
	@Column
	private String name;
	
	@NotBlank
	@Column
	private String phone;
	
	@NotBlank
	@Column
	private String email;
	
	@NotBlank
	@Column
	private String location;
			
	@Lob
	@NotBlank
	@Column
	private String charityProducts ;
	
	@NotBlank
	@Column
	private String date;
	
	@NotBlank
	@Column
	private String time;
	
	@Lob
	@NotBlank
	@Column
	private String comments;
	
// Getters and Setters are generated.

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getCharityProducts() {
		return charityProducts;
	}

	public void setCharityProducts(String charityProducts) {
		this.charityProducts = charityProducts;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	
}
