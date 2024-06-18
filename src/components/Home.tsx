import { useState, useEffect } from 'react';
import EmployeeList from './EmployeeList';
import './Home.css';
import { Employee, PageEnum, dummyEmployee } from './Employee.type';
import AddEmployee from './AddEmployee';
import EmployeeDetails from './EmployeeDetails';

const Home = () => {
  const [employeeList, setEmployeeList] = useState<Employee[]>(() => {
    const savedEmployeeList = localStorage.getItem('employeeList');
    return savedEmployeeList ? JSON.parse(savedEmployeeList) : dummyEmployee;
  });

  const [showPage, setShowPage] = useState(PageEnum.list);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );

  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employeeList));
  }, [employeeList]);

  const onAddEmployeeClickHandler = () => {
    setShowPage(PageEnum.add);
    setSelectedEmployee(null);
  };

  const showListPage = () => {
    setShowPage(PageEnum.list);
    setSelectedEmployee(null);
  };

  const addEmployeeHandler = (employee: {
    firstName: string;
    lastName: string;
    email: string;
  }) => {
    const newEmployee = {
      id: (employeeList.length + 1).toString(), // Ensure id is a string
      ...employee,
    };
    setEmployeeList([...employeeList, newEmployee]);
    showListPage();
  };

  const deleteEmployeeHandler = (employeeId: string) => {
    const updatedEmployeeList = employeeList.filter(
      (employee) => employee.id !== employeeId
    );
    setEmployeeList(updatedEmployeeList);
  };

  const viewEmployeeHandler = (employee: Employee) => {
    setSelectedEmployee(employee);
    setShowPage(PageEnum.list); // Set to list to show the employee details
  };

  return (
    <>
      <article>
        <header>
          <h1>React: Simple Applications</h1>
        </header>
      </article>
      <section>
        {showPage === PageEnum.list && !selectedEmployee && (
          <>
            <input
              type="button"
              value="Add Employee"
              onClick={onAddEmployeeClickHandler}
            />
            <EmployeeList
              list={employeeList}
              onDeleteEmployee={deleteEmployeeHandler}
              onViewEmployee={viewEmployeeHandler}
            />
          </>
        )}

        {showPage === PageEnum.add && !selectedEmployee && (
          <AddEmployee
            onBackBtnHandler={showListPage}
            onAddEmployee={addEmployeeHandler}
          />
        )}

        {selectedEmployee && (
          <EmployeeDetails
            employee={selectedEmployee}
            onBackBtnHandler={showListPage}
          />
        )}
      </section>
    </>
  );
};

export default Home;
