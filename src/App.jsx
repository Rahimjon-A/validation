import { useState } from 'react';
import './App.css';
import Thanks from './Thanks';
import { handleValidation } from './Validate';

function App() {
  const [step, setStep] = useState(false);

  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    middlename: '',
    month: '',
    day: '',
    year: '',
    gender: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    email: '',
    mobile: '',
    phone: '',
    work: '',
    company: '',
    courses: '',
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = handleValidation(values);
    if (Object.keys(formErrors).length === 0) {
      setStep(true);
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <>
      {step ? (
        <Thanks />
      ) : (
        <div className=" my-[100px] flex justify-center px-6 ">
          <div className="bg-[#f5fdff] rounded-md  text-[#005875] max-w-[752px] w-full ">
            <div className="p-[52px] border-b border-[#005875] ">
              <h1 className="text-[1.3rem] sm:text-[2rem] font-bold ">Registration Form</h1>
              <p className="text-[0.9rem] sm:text-[1rem] font-medium ">
                Fill out the form carefully for registration
              </p>
            </div>

            <form onSubmit={handleSubmit}>

              <div className="my-[20px] py-[20px]  px-[52px]  ">
                <label htmlFor="firstname" className="head ">
                  Student Name
                </label>

                <div className="flex justify-between gap-2 flex-wrap ">
                  <div className="flex flex-col flex-1">
                    <input
                      onChange={handleChange}
                      value={values.firstname}
                      type="text"
                      id="firstname"
                      name="firstname"
                      className={`${errors.firstname ? 'border-red-500' : null} `}
                    />
                    <label
                      htmlFor="firstname"
                      className={`mt-[11px] ${errors.firstname ? 'text-red-500' : null} `}
                    >
                      {errors.firstname ? 'First Name is required' : 'First Name'}
                    </label>
                  </div>

                  <div className="flex flex-col flex-1">
                    <input
                      onChange={handleChange}
                      value={values.middlename}
                      type="text"
                      id="middlename"
                      name="middlename"
                      className={`${errors.middlename ? 'border-red-500' : null} `}
                    />
                    <label
                      htmlFor="middlename"
                      className={`mt-[11px] ${errors.middlename ? 'text-red-500' : null} `}
                    >
                      {errors.middlename ? 'Middle Name is required' : 'Middle Name'}
                    </label>
                  </div>

                  <div className="flex flex-col flex-1">
                    <input
                      onChange={handleChange}
                      value={values.lastname}
                      type="text"
                      id="lastname"
                      name="lastname"
                      className={`${errors.lastname ? 'border-red-500' : null} `}
                    />
                    <label
                      htmlFor="lastname"
                      className={`mt-[11px] ${errors.middlename ? 'text-red-500' : null} `}
                    >
                      {errors.lastname ? 'Last Name is required' : 'Last Name'}
                    </label>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1  md:grid-cols-2  gap-6 my-[12px] py-[12px] px-[52px]  ">

                <div>
                  <label htmlFor="" className="head">
                    Birth Date
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="flex flex-col">
                      <select
                        onChange={handleChange}
                        name="month"
                        id="month"
                        className={`${errors.month ? 'border-red-500' : null} `}
                      >
                        <option value="">Please select a month</option>
                        <option value="january">January</option>
                        <option value="february">February</option>
                        <option value="march">March</option>
                        <option value="april">April</option>
                        <option value="may">May</option>
                        <option value="june">June</option>
                        <option value="july">July</option>
                        <option value="august">August</option>
                        <option value="september">September</option>
                        <option value="october">October</option>
                        <option value="november">November</option>
                        <option value="december">December</option>
                      </select>

                      <label
                        htmlFor="month"
                        className={`mt-[8px] ${errors.month ? 'text-red-500' : null} `}
                      >
                        {errors.month ? errors.month : 'Month'}
                      </label>
                    </div>

                    <div className="flex flex-col">
                      <select
                        onChange={handleChange}
                        name="day"
                        id="day"
                        className={`${errors.day ? 'border-red-500' : null} `}
                      >
                        <option value="">Please select a day</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                      </select>
                      <label
                        htmlFor="days"
                        className={`mt-[8px] ${errors.day ? 'text-red-500' : null} `}
                      >
                        {errors.day ? errors.day : 'Days'}
                      </label>
                    </div>

                    <div className="flex flex-col">
                      <select
                        onChange={handleChange}
                        name="year"
                        id="year"
                        className={`${errors.year ? 'border-red-500' : null} `}
                      >
                        <option value="">Please select a year</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                      </select>
                      <label
                        htmlFor="years"
                        className={`mt-[8px] ${errors.year ? 'text-red-500' : null} `}
                      >
                        {errors.year ? errors.year : 'Years'}
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="gender"
                    className={` head ${errors.gender ? 'text-red-500' : null}  `}
                  >
                    {errors.gender ? errors.gender : 'Gender'}
                  </label>

                  <select
                    name="gender"
                    id="gender"
                    onChange={handleChange}
                    className={`w-full ${errors.gender ? 'border-red-500' : null} `}
                  >
                    <option value="">Please select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="N/A">N/A</option>
                  </select>
                </div>
              </div>

              <div className="my-[12px] py-[12px] px-[52px] ">
                <label htmlFor="" className="head">
                  Address
                </label>

                <div className="flex flex-col flex-1 mb-[24px] ">
                  <input
                    type="text"
                    id="street1"
                    name="address1"
                    className={`${errors.address1 ? 'border-red-500' : null} `}
                    onChange={handleChange}
                    value={values.address1}
                  />
                  <label
                    htmlFor="street1"
                    className={`mt-[11px] ${errors.address1 ? 'text-red-500' : null} `}
                  >
                    {errors.address1 ? errors.address1 : 'Street Address'}
                  </label>
                </div>

                <div className="flex flex-col flex-1 mb-[24px] ">
                  <input
                    type="text"
                    id="street2"
                    name="address2"
                    value={values.address2}
                    onChange={handleChange}
                    className={`${errors.address2 ? 'border-red-500' : null} `}
                  />
                  <label
                    htmlFor="street2"
                    className={`mt-[11px] ${errors.address2 ? 'text-red-500' : null} `}
                  >
                    {errors.address2 ? errors.address2 : 'Street Address Line 2'}
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px] ">
                  <div className="flex flex-col flex-1 mb-[24px] ">
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                      className={`${errors.city ? 'border-red-500' : null} `}
                    />
                    <label
                      htmlFor="city"
                      className={`mt-[11px] ${errors.city ? 'text-red-500' : null} `}
                    >
                      {errors.city ? errors.city : ' City'}
                    </label>
                  </div>

                  <div className="flex flex-col flex-1 mb-[24px] ">
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={values.state}
                      onChange={handleChange}
                      className={`${errors.state ? 'border-red-500' : null} `}
                    />
                    <label
                      htmlFor="state"
                      className={`mt-[11px] ${errors.state ? 'text-red-500' : null} `}
                    >
                      {errors.state ? errors.state : 'State / Province'}
                    </label>
                  </div>
                </div>

                <div className="flex flex-col flex-1 mb-[24px] ">
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    value={values.zipcode}
                    onChange={handleChange}
                    className={`${errors.zipcode ? 'border-red-500' : null} `}
                  />
                  <label
                    htmlFor="zipcode"
                    className={`mt-[11px] ${errors.zipcode ? 'text-red-500' : null} `}
                  >
                    {errors.zipcode ? errors.zipcode : 'Postal / Zip Code'}
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2  gap-[24px] px-[52px] ">
                <div className="flex flex-col flex-1 mb-[24px] ">
                  <label htmlFor="email" className="head ">
                    Student E-mail
                  </label>

                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    className={`${errors.email ? 'border-red-500' : null} `}
                  />
                  <label
                    htmlFor="email"
                    className={`mt-[11px] ${errors.email ? 'text-red-500' : null} `}
                  >
                    {errors.email ? errors.email : ' example@example.com'}
                  </label>
                </div>

                <div className="flex flex-col flex-1 mb-[24px] ">
                  <label
                    htmlFor="mobilenumber"
                    className={`head ${errors.mobile ? 'text-red-500' : null} `}
                  >
                    {errors.mobile ? errors.mobile : 'Mobile Number'}
                  </label>
                  <input
                    type="text"
                    id="mobilenumber"
                    placeholder="(000) 000-0000 "
                    name="mobile"
                    value={values.mobile}
                    onChange={handleChange}
                    className={`${errors.mobile ? 'border-red-500' : null} `}
                  />
                </div>

                <div className="flex flex-col flex-1 mb-[24px] ">
                  <label
                    htmlFor="phonenumber"
                    className={`head ${errors.phone ? 'text-red-500' : null} `}
                  >
                    {errors.phone ? errors.phone : 'Phone Number'}
                  </label>

                  <input
                    type="text"
                    id="phonenumber"
                    placeholder="(000) 000-0000 "
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    className={`${errors.phone ? 'border-red-500' : null} `}
                  />
                </div>

                <div className="flex flex-col flex-1 mb-[24px] ">
                  <label
                    htmlFor="worknumber"
                    className={`head ${errors.work ? 'text-red-500' : null} `}
                  >
                    {errors.work ? errors.work : 'Work Number'}
                  </label>

                  <input
                    type="text"
                    id="worknumber"
                    placeholder="(000) 000-0000 "
                    name="work"
                    value={values.work}
                    onChange={handleChange}
                    className={`${errors.work ? 'border-red-500' : null} `}
                  />
                </div>

                <div className="flex flex-col flex-1 mb-[24px] ">
                  <label
                    htmlFor="worknumber"
                    className={`head ${errors.company ? 'text-red-500' : null} `}
                  >
                    {errors.company ? errors.company : 'Company'}
                  </label>

                  <input
                    type="text"
                    id="worknumber"
                    name="company"
                    value={values.company}
                    onChange={handleChange}
                    className={`${errors.company ? 'border-red-500' : null} `}
                  />
                </div>

                <div className="flex flex-col flex-1 mb-[24px] ">
                  <label
                    htmlFor="courses"
                    className={`head ${errors.courses ? 'text-red-500' : null} `}
                  >
                    {errors.courses ? errors.courses : 'Courses'}
                  </label>
                  <select
                    name="courses"
                    id="courses"
                    onChange={handleChange}
                    className={`${errors.courses ? 'border-red-500' : null} `}
                  >
                    <option value="">Please Select</option>
                    <option value="windows8">Windows 8</option>
                    <option value="linux">Introduction to Linux</option>
                    <option value="english101">English 101</option>
                    <option value="english102">English 102</option>
                    <option value="creativewriting1">Creative Writing 1</option>
                    <option value="history101">History 101</option>
                    <option value="math101">Math 101</option>
                    <option value="math102">Math 102</option>
                  </select>
                </div>
              </div>

              <div className=" my-[12px] py-[12px] pb-[24px] flex flex-col px-[52px]  border-b border-[#005875] ">
                <label htmlFor="textarea" className="head ">
                  Additional Comments
                </label>
                <textarea
                  name="textarea"
                  id="textarea"
                  className=" h-[163px] resize-none"
                ></textarea>
              </div>

              <button className="mx-auto block mt-[30px] mb-[52px] bg-[#005875] text-[white] rounded-md px-10 py-2 ">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
