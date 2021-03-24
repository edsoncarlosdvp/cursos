package com.eventapp.repository;

import javax.persistence.Entity;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.repository.CrudRepository;

import com.eventapp.models.Evento;

@Entity
@ComponentScan
public interface EventoRepository extends CrudRepository<Evento, String>{
	
	

}