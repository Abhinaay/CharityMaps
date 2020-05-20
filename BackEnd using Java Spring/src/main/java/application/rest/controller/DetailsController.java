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

	@Autowired
	private DetailsService detailsService;

	@CrossOrigin
	@PostMapping("/add")
	public ResponseEntity createPost(@RequestBody DetailsDto detailsDto)
	{
		detailsService.addDetails(detailsDto);
		
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	
	@CrossOrigin
	@GetMapping("/all")
	public ResponseEntity<List<DetailsDto>> showAllPosts() {
		return new ResponseEntity<>(detailsService.showAllDetails(), HttpStatus.OK);
	}
}
