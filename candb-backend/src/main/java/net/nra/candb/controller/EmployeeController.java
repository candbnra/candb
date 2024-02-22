package net.nra.candb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.nra.candb.model.Employee;
import net.nra.candb.repository.EmployeeRepository;


@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	//get all employees
	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {
		return employeeRepository.findAll();
	}

	//get all employees
	@PostMapping("/employees")
	public Employee createEmployee(Employee employee) {
		return employeeRepository.save(employee);
	}
}
