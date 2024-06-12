export const handleValidation = (values) => {
  const newErrors = {};
  if (values.firstname.trim() == '') newErrors.firstname = 'First name is required!';
  if (values.lastname.trim() == '') newErrors.lastname = 'Last  name is required!';
  if (values.middlename.trim() == '') newErrors.middlename = 'Middle name is required!';
  if (values.month.trim() == '') newErrors.month = "Month's required!";
  if (values.day.trim() == '') newErrors.day = "Day's required!";
  if (values.year.trim() == '') newErrors.year = "Year's required!";
  if (values.gender.trim() == '') newErrors.gender = "Gender's required!";
  if (values.address1.trim() == '') newErrors.address1 = 'Address is required!';
  if (values.address2.trim() == '') newErrors.address2 = 'Addres is required!';
  if (values.city.trim() == '') newErrors.city = 'City is required!';
  if (values.state.trim() == '') newErrors.state = 'State is required!';
  if (values.company.trim() == '') newErrors.company = 'Company name is required!';
  if (values.courses.trim() == '') newErrors.courses = 'Courses is required!';
  if (values.zipcode.trim() === '') {
    newErrors.zipcode = 'Postal / Zip Code is required!';
  } else if (!/^\d+$/.test(values.zipcode)) {
    newErrors.zipcode = 'Postal / Zip Code should contain only numbers!';
  }
  if (values.email.trim() === '') {
    newErrors.email = 'Email is required!';
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
    newErrors.email = 'Invalid email format!';
  }
  if (values.mobile.trim() === '') {
    newErrors.mobile = 'Mobile number is required!';
  } else if (!/^\d+$/.test(values.mobile)) {
    newErrors.mobile = 'Mobile number should contain only numbers!';
  } else if (values.mobile.length !== 10) {
    newErrors.mobile = 'Mobile number should be exactly 10 digits long!';
  }
  if (values.phone.trim() === '') {
    newErrors.phone = 'Phone number is required!';
  } else if (!/^\d+$/.test(values.phone)) {
    newErrors.phone = 'Phone number should contain only numbers!';
  } else if (values.phone.length !== 10) {
    newErrors.phone = 'Phone number should be exactly 10 digits long!';
  }
  if (values.work.trim() === '') {
    newErrors.work = 'Work number is required!';
  } else if (!/^\d+$/.test(values.work)) {
    newErrors.work = 'Work number should contain only numbers!';
  } else if (values.work.length !== 10) {
    newErrors.work = 'Work number should be exactly 10 digits long!';
  }

  return newErrors;
};
