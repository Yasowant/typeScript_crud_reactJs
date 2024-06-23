import { useState } from 'react';
import './AddEmployee.style.css';

type Props = {
  onBackBtnHandler: () => void;
  onAddEmployee: (employee: {
    firstName: string;
    lastName: string;
    email: string;
  }) => void;
};

const AddEmployee = (props: Props) => {
  const { onBackBtnHandler, onAddEmployee } = props;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddEmployee(formData);
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email Id:</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="button-group">
            <input type="button" value="Back" onClick={onBackBtnHandler} />
            <input id="btn_addemployee" type="submit" value="Add Employee" />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddEmployee;
