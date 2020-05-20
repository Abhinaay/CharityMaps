package application.rest.service;


import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import application.dto.DetailsDto;
import application.jpaDirectory.DetailsByCommunity;
import application.jpaDirectory.DetailsByCommunityRepository;

@Service
public class DetailsService {

	@Autowired
	private DetailsByCommunityRepository detailsRepository;
	
	public void addDetails(DetailsDto detailsDto) {
	
		DetailsByCommunity details = mapFromDtoToDetails(detailsDto);
		detailsRepository.save(details);
	}

	private DetailsByCommunity mapFromDtoToDetails(DetailsDto detailsDto) {
		
		DetailsByCommunity details = new DetailsByCommunity();
		details.setName(detailsDto.getName());
		details.setPhone(detailsDto.getPhone());
		details.setEmail(detailsDto.getEmail());
		details.setLocation(detailsDto.getLocation());
		details.setCharityProducts(detailsDto.getCharityProducts());
		details.setDate(detailsDto.getDate());
		details.setTime(detailsDto.getTime());
		details.setComments(detailsDto.getComments());
		
		return details;
	}

	public List<DetailsDto> showAllDetails() {
		
		List<DetailsByCommunity> details = (List<DetailsByCommunity>) detailsRepository.findAll();
		Collections.reverse(details);
		
		return details.stream().map(this::mapFromDetailstoDto).collect(Collectors.toList());
	}
	
	private DetailsDto mapFromDetailstoDto(DetailsByCommunity details)
	{
		DetailsDto dto=new DetailsDto();
		dto.setId(details.getId());
		dto.setName(details.getName());
		dto.setPhone(details.getPhone());
		dto.setEmail(details.getEmail());
		dto.setLocation(details.getLocation());
		dto.setCharityProducts(details.getCharityProducts());
		dto.setDate(details.getDate());
		dto.setTime(details.getTime());
		dto.setComments(details.getComments());
		
		return dto;
	}

}
