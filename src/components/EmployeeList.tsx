import './EmployeeList.style.css';
import { Employee } from './Employee.type';

type Props = {
  list: Employee[];
  onDeleteEmployee: (id: string) => void;
  onViewEmployee: (employee: Employee) => void;
};

const EmployeeList = (props: Props) => {
  const { list, onDeleteEmployee, onViewEmployee } = props;

  const handleDelete = (id: string) => {
    onDeleteEmployee(id);
  };

  const handleView = (employee: Employee) => {
    onViewEmployee(employee);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((employee) => (
            <tr key={employee.id}>
              <td>{`${employee.firstName} ${employee.lastName}`}</td>
              <td>{employee.email}</td>
              <td>
                <div>
                  <input
                    type="button"
                    value="VIEW"
                    onClick={() => handleView(employee)}
                  />
                  <input type="button" value="EDIT" />
                  <input
                    type="button"
                    value="DELETE"
                    onClick={() => handleDelete(employee.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
