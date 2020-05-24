package application.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import application.dto.DetailsDto;
import application.rest.service.DetailsService;


@RestController
@RequestMapping("/api/details")
public class DetailsController {
// It is a Rest Controller
	@Autowired
	private DetailsService detailsService;

// CrossOrigin Annotation is used to Enable CORS (Cross Origin Resource Sharing) for this method.
// This method is called when a user calls an API to add an entry into the database.
	@CrossOrigin
	@PostMapping("/add")
	public ResponseEntity createPost(@RequestBody DetailsDto detailsDto)
	{
		detailsService.addDetails(detailsDto);
		
		return new ResponseEntity<>(HttpStatus.OK);
		
	}

// CrossOrigin Annotation is used to Enable CORS (Cross Origin Resource Sharing) for this method.
// This method is called when a user calls an API to show the information stored in the database.
	@CrossOrigin
	@GetMapping("/all")
	public ResponseEntity<List<DetailsDto>> showAllPosts() {
		return new ResponseEntity<>(detailsService.showAllDetails(), HttpStatus.OK);
	}
}
