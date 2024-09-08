// "use client";
// import React, { useEffect, useRef, useState, RefObject } from "react";

// const Modal: React.FC = () => {
//   const [modalOpen, setModalOpen] = useState(false);

//   const trigger = useRef<HTMLButtonElement | null>(null);
//   const modal = useRef<HTMLDivElement | null>(null);

//   // close on click outside
//   useEffect(() => {
//     const clickHandler = (event: MouseEvent) => {
//       const target = event.target as Node;
//       if (!modal.current || !trigger.current) return;
//       if (
//         !modalOpen ||
//         modal.current.contains(target) ||
//         trigger.current.contains(target)
//       )
//         return;
//       setModalOpen(false);
//     };
//     document.addEventListener("click", clickHandler);
//     return () => document.removeEventListener("click", clickHandler);
//   }, [modalOpen]);

//   // close if the esc key is pressed
//   useEffect(() => {
//     const keyHandler = (event: KeyboardEvent) => {
//       if (!modalOpen || event.key !== "Escape") return;
//       setModalOpen(false);
//     };
//     document.addEventListener("keydown", keyHandler);
//     return () => document.removeEventListener("keydown", keyHandler);
//   }, [modalOpen]);

//   return (
//     <>
//       <button
//         ref={trigger}
//         onClick={() => setModalOpen(true)}
//         className="flex bg-sky-700 text-white outline px-12 py-4 rounded-md hover:bg-emerald-500 hover:text-white"
//       >
//         Get Started Today
//       </button>
//       <div
//         className={`fixed left-0 top-0 flex w-[100vw] h-[100vh] items-center justify-center bg-black/90 px-4 py-5 z-50 ${
//           modalOpen ? "block" : "hidden"
//         }`}
//       >
//         <div
//           ref={modal}
//           className="w-full max-w-[60vw] h-[80vh] rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
//         >
//           {/* here add content in modal  */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Modal;

// "use client";
// import React, { useState } from "react";

// const MultiStepFormModal = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     hasWebsite: "no",
//     domain: "",
//     hosting: "",
//     domainRegistrar: "",
//     idealCustomers: "",
//     targetLocations: "",
//     targetAgeGroup: "",
//     customerType: "homeowners",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });

//   // Basic validation before moving to the next step
//   const handleNext = () => {
//     if (step === 1 && !formData.name) {
//       setErrors({ ...errors, name: "Name is required" });
//       return;
//     } else if (step === 2 && !formData.email) {
//       setErrors({ ...errors, email: "Email is required" });
//       return;
//     } else if (step === 3 && !formData.phone) {
//       setErrors({ ...errors, phone: "Phone number is required" });
//       return;
//     }

//     setErrors({ name: "", email: "", phone: "" });
//     setStep((prevStep) => prevStep + 1);
//   };

//   const handleBack = () => {
//     setStep((prevStep) => prevStep - 1);
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = () => {
//     // Submission logic (e.g., API call)
//     alert("Form submitted!");
//     setModalOpen(false);
//   };

//   return (
//     <>
//       <button
//         onClick={() => setModalOpen(true)}
//         className="w-[240px] bg-blue-600 text-white outline px-12 py-4 rounded-md hover:bg-blue-500"
//       >
//         Get Started Today
//       </button>

//       {modalOpen && (
//         <div className="fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 z-50">
//           <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-xl">
//             {step <= 8 && (
//               <>
//                 <h3 className="mb-6 text-xl font-semibold text-dark">
//                   {step === 1 && "What's your name?"}
//                   {step === 2 && "What's your email?"}
//                   {step === 3 && "What's your phone number?"}
//                   {step === 4 && "Do you currently have a website?"}
//                   {step === 5 && "Who are your ideal customers?"}
//                   {step === 6 &&
//                     "What zip codes, cities, or towns do you target?"}
//                   {step === 7 && "What age group do you want to target?"}
//                   {step === 8 &&
//                     "Are your customers mostly renters or homeowners?"}
//                 </h3>

//                 <form>
//                   {/* Steps */}
//                   {step === 1 && (
//                     <div className="mb-6">
//                       <input
//                         type="text"
//                         name="name"
//                         placeholder="Enter your name"
//                         className="w-full rounded-md border px-4 py-3"
//                         value={formData.name}
//                         onChange={handleChange}
//                       />
//                       {errors.name && (
//                         <p className="text-red-600 text-sm">{errors.name}</p>
//                       )}
//                     </div>
//                   )}

//                   {step === 2 && (
//                     <div className="mb-6">
//                       <input
//                         type="email"
//                         name="email"
//                         placeholder="Enter your email"
//                         className="w-full rounded-md border px-4 py-3"
//                         value={formData.email}
//                         onChange={handleChange}
//                       />
//                       {errors.email && (
//                         <p className="text-red-600 text-sm">{errors.email}</p>
//                       )}
//                     </div>
//                   )}

//                   {step === 3 && (
//                     <div className="mb-6">
//                       <input
//                         type="text"
//                         name="phone"
//                         placeholder="Enter your phone number"
//                         className="w-full rounded-md border px-4 py-3"
//                         value={formData.phone}
//                         onChange={handleChange}
//                       />
//                       {errors.phone && (
//                         <p className="text-red-600 text-sm">{errors.phone}</p>
//                       )}
//                     </div>
//                   )}

//                   {step === 4 && (
//                     <div className="mb-6">
//                       <select
//                         name="hasWebsite"
//                         value={formData.hasWebsite}
//                         onChange={handleChange}
//                         className="w-full rounded-md border px-4 py-3"
//                       >
//                         <option value="no">No</option>
//                         <option value="yes">Yes</option>
//                       </select>

//                       {formData.hasWebsite === "yes" && (
//                         <>
//                           <div className="mt-4">
//                             <input
//                               type="text"
//                               name="domain"
//                               placeholder="What's your current website domain name?"
//                               className="w-full rounded-md border px-4 py-3"
//                               value={formData.domain}
//                               onChange={handleChange}
//                             />
//                           </div>
//                           <div className="mt-4">
//                             <input
//                               type="text"
//                               name="hosting"
//                               placeholder="Do you know where it's hosted?"
//                               className="w-full rounded-md border px-4 py-3"
//                               value={formData.hosting}
//                               onChange={handleChange}
//                             />
//                           </div>
//                           <div className="mt-4">
//                             <input
//                               type="text"
//                               name="domainRegistrar"
//                               placeholder="Do you know who registered the domain?"
//                               className="w-full rounded-md border px-4 py-3"
//                               value={formData.domainRegistrar}
//                               onChange={handleChange}
//                             />
//                           </div>
//                         </>
//                       )}
//                     </div>
//                   )}

//                   {step === 5 && (
//                     <div className="mb-6">
//                       <input
//                         type="text"
//                         name="idealCustomers"
//                         placeholder="Describe your ideal customers"
//                         className="w-full rounded-md border px-4 py-3"
//                         value={formData.idealCustomers}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   )}

//                   {step === 6 && (
//                     <div className="mb-6">
//                       <input
//                         type="text"
//                         name="targetLocations"
//                         placeholder="Enter zip codes, cities, or towns"
//                         className="w-full rounded-md border px-4 py-3"
//                         value={formData.targetLocations}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   )}

//                   {step === 7 && (
//                     <div className="mb-6">
//                       <input
//                         type="text"
//                         name="targetAgeGroup"
//                         placeholder="Enter the age group you want to target"
//                         className="w-full rounded-md border px-4 py-3"
//                         value={formData.targetAgeGroup}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   )}

//                   {step === 8 && (
//                     <div className="mb-6">
//                       <select
//                         name="customerType"
//                         value={formData.customerType}
//                         onChange={handleChange}
//                         className="w-full rounded-md border px-4 py-3"
//                       >
//                         <option value="homeowners">Homeowners</option>
//                         <option value="renters">Renters</option>
//                       </select>
//                     </div>
//                   )}

//                   {/* Step Navigation Buttons */}
//                   <div className="mt-8 flex justify-between">
//                     {step > 1 && (
//                       <button
//                         type="button"
//                         onClick={handleBack}
//                         className="px-6 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100"
//                       >
//                         Back
//                       </button>
//                     )}
//                     <button
//                       type="button"
//                       onClick={handleNext}
//                       className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
//                     >
//                       {step === 8 ? "Next" : "Next"}
//                     </button>
//                   </div>
//                 </form>
//               </>
//             )}

//             {step === 9 && (
//               <div>
//                 <h3 className="mb-6 text-xl font-semibold text-dark">
//                   Confirm Your Information
//                 </h3>
//                 <div className="mb-4 text-left">
//                   <p>
//                     <strong>Name:</strong> {formData.name}
//                   </p>
//                   <p>
//                     <strong>Email:</strong> {formData.email}
//                   </p>
//                   <p>
//                     <strong>Phone:</strong> {formData.phone}
//                   </p>
//                   <p>
//                     <strong>Has Website:</strong> {formData.hasWebsite}
//                   </p>
//                   {formData.hasWebsite === "yes" && (
//                     <>
//                       <p>
//                         <strong>Domain Name:</strong> {formData.domain}
//                       </p>
//                       <p>
//                         <strong>Hosting Provider:</strong> {formData.hosting}
//                       </p>
//                       <p>
//                         <strong>Domain Registrar:</strong>{" "}
//                         {formData.domainRegistrar}
//                       </p>
//                     </>
//                   )}
//                   <p>
//                     <strong>Ideal Customers:</strong> {formData.idealCustomers}
//                   </p>
//                   <p>
//                     <strong>Target Locations:</strong>{" "}
//                     {formData.targetLocations}
//                   </p>
//                   <p>
//                     <strong>Target Age Group:</strong> {formData.targetAgeGroup}
//                   </p>
//                   <p>
//                     <strong>Customer Type:</strong> {formData.customerType}
//                   </p>
//                 </div>
//                 <div className="mt-8 flex justify-between">
//                   <button
//                     type="button"
//                     onClick={handleBack}
//                     className="px-6 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     type="button"
//                     onClick={handleSubmit}
//                     className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-500"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </div>
//             )}

//             <button
//               onClick={() => setModalOpen(false)}
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
//             >
//               ×
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default MultiStepFormModal;

// "use client";
// import React, { useState } from "react";

// // Regular expressions for validation
// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const phoneRegex = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;
// const nameRegex = /^[a-zA-Z\s]{3,}$/; // At least 3 characters, no special characters

// const MultiStepFormModal = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     hasWebsite: "no",
//     domain: "",
//     hosting: "",
//     domainRegistrar: "",
//     idealCustomers: "",
//     targetLocations: "",
//     targetAgeGroup: "",
//     customerType: "homeowners",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });

//   const sanitizeInput = (value: string) => value.trim();

//   const handleNext = () => {
//     const sanitizedData = {
//       ...formData,
//       name: sanitizeInput(formData.name),
//       email: sanitizeInput(formData.email),
//       phone: sanitizeInput(formData.phone),
//     };

//     // Validation logic
//     if (
//       step === 1 &&
//       (!sanitizedData.name || !nameRegex.test(sanitizedData.name))
//     ) {
//       setErrors({
//         ...errors,
//         name: "Name must be at least 3 characters without special characters.",
//       });
//       return;
//     } else if (
//       step === 2 &&
//       (!sanitizedData.email || !emailRegex.test(sanitizedData.email))
//     ) {
//       setErrors({ ...errors, email: "Please provide a valid email address." });
//       return;
//     } else if (
//       step === 3 &&
//       (!sanitizedData.phone || !phoneRegex.test(sanitizedData.phone))
//     ) {
//       setErrors({ ...errors, phone: "Please enter a valid US phone number." });
//       return;
//     }

//     setFormData(sanitizedData);
//     setErrors({ name: "", email: "", phone: "" });
//     setStep((prevStep) => prevStep + 1);
//   };

//   const handleBack = () => {
//     setStep((prevStep) => prevStep - 1);
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = () => {
//     console.log("Final Form Data:", formData);
//     alert("Form submitted successfully!");
//     setModalOpen(false);
//   };

//   return (
//     <>
//       <button
//         onClick={() => setModalOpen(true)}
//         className="w-[240px] bg-blue-600 text-white outline px-12 py-4 rounded-md hover:bg-blue-500"
//       >
//         Get Started Today
//       </button>

//       {modalOpen && (
//         <div className="fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 z-50">
//           <div className="w-[60vw] h-[60vh] rounded-2xl bg-white p-8 text-center shadow-xl overflow-auto">
//             {step <= 8 && (
//               <>
//                 <h3 className="mb-6 text-xl font-semibold text-dark">
//                   {step === 1 && "What's your name?"}
//                   {step === 2 && "What's your email?"}
//                   {step === 3 && "What's your phone number?"}
//                   {step === 4 && "Do you currently have a website?"}
//                   {step === 5 && "Who are your ideal customers?"}
//                   {step === 6 &&
//                     "What zip codes, cities, or towns do you target?"}
//                   {step === 7 && "What age group do you want to target?"}
//                   {step === 8 &&
//                     "Are your customers mostly renters or homeowners?"}
//                 </h3>

//                 <form>
//                   {/* Steps */}
//                   {step === 1 && (
//                     <div className="mb-6">
//                       <input
//                         type="text"
//                         name="name"
//                         placeholder="Enter your name (e.g., John Doe)"
//                         className={`w-full rounded-md border px-4 py-3 ${
//                           errors.name ? "border-red-500" : "border-gray-300"
//                         } focus:border-green-500`}
//                         value={formData.name}
//                         onChange={handleChange}
//                       />
//                       {errors.name && (
//                         <p className="text-red-600 text-sm">{errors.name}</p>
//                       )}
//                     </div>
//                   )}

//                   {step === 2 && (
//                     <div className="mb-6">
//                       <input
//                         type="email"
//                         name="email"
//                         placeholder="Enter your email (e.g., johndoe@example.com)"
//                         className={`w-full rounded-md border px-4 py-3 ${
//                           errors.email ? "border-red-500" : "border-gray-300"
//                         } focus:border-green-500`}
//                         value={formData.email}
//                         onChange={handleChange}
//                       />
//                       {errors.email && (
//                         <p className="text-red-600 text-sm">{errors.email}</p>
//                       )}
//                     </div>
//                   )}

//                   {step === 3 && (
//                     <div className="mb-6">
//                       <input
//                         type="text"
//                         name="phone"
//                         placeholder="Enter your phone number (e.g., 123-456-7890)"
//                         className={`w-full rounded-md border px-4 py-3 ${
//                           errors.phone ? "border-red-500" : "border-gray-300"
//                         } focus:border-green-500`}
//                         value={formData.phone}
//                         onChange={handleChange}
//                       />
//                       {errors.phone && (
//                         <p className="text-red-600 text-sm">{errors.phone}</p>
//                       )}
//                     </div>
//                   )}

//                   {step === 4 && (
//                     <div className="mb-6">
//                       <select
//                         name="hasWebsite"
//                         value={formData.hasWebsite}
//                         onChange={handleChange}
//                         className="w-full rounded-md border px-4 py-3"
//                       >
//                         <option value="no">No</option>
//                         <option value="yes">Yes</option>
//                       </select>

//                       {formData.hasWebsite === "yes" && (
//                         <>
//                           <div className="mt-4">
//                             <input
//                               type="text"
//                               name="domain"
//                               placeholder="What's your current website domain name? (e.g., example.com)"
//                               className="w-full rounded-md border px-4 py-3"
//                               value={formData.domain}
//                               onChange={handleChange}
//                             />
//                           </div>
//                           <div className="mt-4">
//                             <input
//                               type="text"
//                               name="hosting"
//                               placeholder="Do you know where it's hosted? (e.g., Bluehost)"
//                               className="w-full rounded-md border px-4 py-3"
//                               value={formData.hosting}
//                               onChange={handleChange}
//                             />
//                           </div>
//                           <div className="mt-4">
//                             <input
//                               type="text"
//                               name="domainRegistrar"
//                               placeholder="Do you know who registered the domain? (e.g., GoDaddy)"
//                               className="w-full rounded-md border px-4 py-3"
//                               value={formData.domainRegistrar}
//                               onChange={handleChange}
//                             />
//                           </div>
//                         </>
//                       )}
//                     </div>
//                   )}

//                   {step === 5 && (
//                     <div className="mb-6">
//                       <input
//                         type="text"
//                         name="idealCustomers"
//                         placeholder="Describe your ideal customers"
//                         className="w-full rounded-md border px-4 py-3"
//                         value={formData.idealCustomers}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   )}

//                   {step === 6 && (
//                     <div className="mb-6">
//                       <input
//                         type="text"
//                         name="targetLocations"
//                         placeholder="Enter zip codes, cities, or towns"
//                         className="w-full rounded-md border px-4 py-3"
//                         value={formData.targetLocations}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   )}

//                   {step === 7 && (
//                     <div className="mb-6">
//                       <input
//                         type="text"
//                         name="targetAgeGroup"
//                         placeholder="Enter the age group you want to target"
//                         className="w-full rounded-md border px-4 py-3"
//                         value={formData.targetAgeGroup}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   )}

//                   {step === 8 && (
//                     <div className="mb-6">
//                       <select
//                         name="customerType"
//                         value={formData.customerType}
//                         onChange={handleChange}
//                         className="w-full rounded-md border px-4 py-3"
//                       >
//                         <option value="homeowners">Homeowners</option>
//                         <option value="renters">Renters</option>
//                         <option value="renters">Both</option>
//                       </select>
//                     </div>
//                   )}

//                   {/* Step Navigation Buttons */}
//                   <div className="mt-8 flex justify-between">
//                     {step > 1 && (
//                       <button
//                         type="button"
//                         onClick={handleBack}
//                         className="px-6 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100"
//                       >
//                         Back
//                       </button>
//                     )}
//                     <button
//                       type="button"
//                       onClick={handleNext}
//                       className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
//                     >
//                       {step === 8 ? "Next" : "Next"}
//                     </button>
//                   </div>
//                 </form>
//               </>
//             )}

//             {step === 9 && (
//               <div>
//                 <h3 className="mb-6 text-xl font-semibold text-dark">
//                   Confirm Your Information
//                 </h3>
//                 <div className="mb-4 text-left">
//                   <p>
//                     <strong>Name:</strong> {formData.name}
//                   </p>
//                   <p>
//                     <strong>Email:</strong> {formData.email}
//                   </p>
//                   <p>
//                     <strong>Phone:</strong> {formData.phone}
//                   </p>
//                   <p>
//                     <strong>Has Website:</strong> {formData.hasWebsite}
//                   </p>
//                   {formData.hasWebsite === "yes" && (
//                     <>
//                       <p>
//                         <strong>Domain Name:</strong> {formData.domain}
//                       </p>
//                       <p>
//                         <strong>Hosting Provider:</strong> {formData.hosting}
//                       </p>
//                       <p>
//                         <strong>Domain Registrar:</strong>{" "}
//                         {formData.domainRegistrar}
//                       </p>
//                     </>
//                   )}
//                   <p>
//                     <strong>Ideal Customers:</strong> {formData.idealCustomers}
//                   </p>
//                   <p>
//                     <strong>Target Locations:</strong>{" "}
//                     {formData.targetLocations}
//                   </p>
//                   <p>
//                     <strong>Target Age Group:</strong> {formData.targetAgeGroup}
//                   </p>
//                   <p>
//                     <strong>Customer Type:</strong> {formData.customerType}
//                   </p>
//                 </div>
//                 <div className="mt-8 flex justify-between">
//                   <button
//                     type="button"
//                     onClick={handleBack}
//                     className="px-6 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     type="button"
//                     onClick={handleSubmit}
//                     className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-500"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </div>
//             )}

//             <button
//               onClick={() => setModalOpen(false)}
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
//             >
//               ×
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default MultiStepFormModal;

"use client";
import React, { useState } from "react";

// Regular expressions for validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;
const nameRegex = /^[a-zA-Z\s]{3,}$/; // At least 3 characters, no special characters

const MultiStepFormModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    hasWebsite: "no",
    domain: "",
    hosting: "",
    domainRegistrar: "",
    idealCustomers: "",
    targetLocations: "",
    targetAgeGroup: "",
    customerType: "homeowners",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isConsentChecked, setIsConsentChecked] = useState(false); // Checkbox state
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false); // Submit button state

  const sanitizeInput = (value: string) => value.trim();

  // Input field border color based on validation
  const getInputBorderColor = (field: string) => {
    if (errors[field as keyof typeof errors]) return "border-red-500";
    return "border-gray-300 focus:border-emerald-500";
  };

  const handleNext = () => {
    const sanitizedData = {
      ...formData,
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone),
    };

    // Validation logic
    if (
      step === 1 &&
      (!sanitizedData.name || !nameRegex.test(sanitizedData.name))
    ) {
      setErrors({
        ...errors,
        name: "Name must be at least 3 characters without special characters.",
      });
      return;
    } else if (
      step === 2 &&
      (!sanitizedData.email || !emailRegex.test(sanitizedData.email))
    ) {
      setErrors({ ...errors, email: "Please provide a valid email address." });
      return;
    } else if (
      step === 3 &&
      (!sanitizedData.phone || !phoneRegex.test(sanitizedData.phone))
    ) {
      setErrors({ ...errors, phone: "Please enter a valid US phone number." });
      return;
    }

    setFormData(sanitizedData);
    setErrors({ name: "", email: "", phone: "" });
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsConsentChecked(e.target.checked);
    setIsSubmitEnabled(e.target.checked); // Enable submit button only when consent is checked
  };

  const handleSubmit = () => {
    console.log("Final Form Data:", formData);
    alert("Form submitted successfully!");
    setModalOpen(false);
  };

  // Handle Enter key press to move to the next step
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="w-[240px] bg-blue-600 text-white outline px-12 py-4 rounded-md hover:bg-blue-500"
      >
        Get Started Today
      </button>

      {modalOpen && (
        <div className="fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 z-50">
          <div className="w-[60vw] h-[60vh] rounded-2xl bg-white p-8 text-center shadow-xl overflow-auto">
            {step <= 8 && (
              <>
                <h3 className="mb-6 text-xl font-semibold text-dark">
                  {step === 1 && "What's your name?"}
                  {step === 2 && "What's your email?"}
                  {step === 3 && "What's your phone number?"}
                  {step === 4 && "Do you currently have a website?"}
                  {step === 5 && "Who are your ideal customers?"}
                  {step === 6 &&
                    "What zip codes, cities, or towns do you target?"}
                  {step === 7 && "What age group do you want to target?"}
                  {step === 8 &&
                    "Are your customers mostly renters or homeowners?"}
                </h3>

                <form onKeyDown={handleKeyPress}>
                  {/* Steps */}
                  {step === 1 && (
                    <div className="mb-6">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name (e.g., John Doe)"
                        className={`w-full rounded-md border px-4 py-3 ${getInputBorderColor(
                          "name"
                        )}`}
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <p className="text-red-600 text-sm">{errors.name}</p>
                      )}
                    </div>
                  )}

                  {step === 2 && (
                    <div className="mb-6">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email (e.g., johndoe@example.com)"
                        className={`w-full rounded-md border px-4 py-3 ${getInputBorderColor(
                          "email"
                        )}`}
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <p className="text-red-600 text-sm">{errors.email}</p>
                      )}
                    </div>
                  )}

                  {step === 3 && (
                    <div className="mb-6">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Enter your phone number (e.g., 123-456-7890)"
                        className={`w-full rounded-md border px-4 py-3 ${getInputBorderColor(
                          "phone"
                        )}`}
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && (
                        <p className="text-red-600 text-sm">{errors.phone}</p>
                      )}
                    </div>
                  )}

                  {step === 4 && (
                    <div className="mb-6">
                      <select
                        name="hasWebsite"
                        value={formData.hasWebsite}
                        onChange={handleChange}
                        className="w-full rounded-md border px-4 py-3"
                      >
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                      </select>

                      {formData.hasWebsite === "yes" && (
                        <>
                          <div className="mt-4">
                            <input
                              type="text"
                              name="domain"
                              placeholder="What's your current website domain name? (e.g., example.com)"
                              className="w-full rounded-md border px-4 py-3"
                              value={formData.domain}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mt-4">
                            <input
                              type="text"
                              name="hosting"
                              placeholder="Do you know where it's hosted? (e.g., Bluehost)"
                              className="w-full rounded-md border px-4 py-3"
                              value={formData.hosting}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mt-4">
                            <input
                              type="text"
                              name="domainRegistrar"
                              placeholder="Do you know who registered the domain? (e.g., GoDaddy)"
                              className="w-full rounded-md border px-4 py-3"
                              value={formData.domainRegistrar}
                              onChange={handleChange}
                            />
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  {step === 5 && (
                    <div className="mb-6">
                      <input
                        type="text"
                        name="idealCustomers"
                        placeholder="Describe your ideal customers"
                        className="w-full rounded-md border px-4 py-3"
                        value={formData.idealCustomers}
                        onChange={handleChange}
                      />
                    </div>
                  )}

                  {step === 6 && (
                    <div className="mb-6">
                      <input
                        type="text"
                        name="targetLocations"
                        placeholder="Enter zip codes, cities, or towns"
                        className="w-full rounded-md border px-4 py-3"
                        value={formData.targetLocations}
                        onChange={handleChange}
                      />
                    </div>
                  )}

                  {step === 7 && (
                    <div className="mb-6">
                      <input
                        type="text"
                        name="targetAgeGroup"
                        placeholder="Enter the age group you want to target"
                        className="w-full rounded-md border px-4 py-3"
                        value={formData.targetAgeGroup}
                        onChange={handleChange}
                      />
                    </div>
                  )}

                  {step === 8 && (
                    <div className="mb-6">
                      <select
                        name="customerType"
                        value={formData.customerType}
                        onChange={handleChange}
                        className="w-full rounded-md border px-4 py-3"
                      >
                        <option value="homeowners">Homeowners</option>
                        <option value="renters">Renters</option>
                      </select>
                    </div>
                  )}

                  {/* Step Navigation Buttons */}
                  <div className="mt-8 flex justify-between">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="px-6 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100"
                      >
                        Back
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
                    >
                      {step === 8 ? "Next" : "Next"}
                    </button>
                  </div>
                </form>
              </>
            )}

            {step === 9 && (
              <div>
                <h3 className="mb-6 text-xl font-semibold text-dark">
                  Confirm Your Information
                </h3>
                <div className="mb-4 text-left">
                  <p>
                    <strong>Name:</strong> {formData.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {formData.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {formData.phone}
                  </p>
                  <p>
                    <strong>Has Website:</strong> {formData.hasWebsite}
                  </p>
                  {formData.hasWebsite === "yes" && (
                    <>
                      <p>
                        <strong>Domain Name:</strong> {formData.domain}
                      </p>
                      <p>
                        <strong>Hosting Provider:</strong> {formData.hosting}
                      </p>
                      <p>
                        <strong>Domain Registrar:</strong>{" "}
                        {formData.domainRegistrar}
                      </p>
                    </>
                  )}
                  <p>
                    <strong>Ideal Customers:</strong> {formData.idealCustomers}
                  </p>
                  <p>
                    <strong>Target Locations:</strong>{" "}
                    {formData.targetLocations}
                  </p>
                  <p>
                    <strong>Target Age Group:</strong> {formData.targetAgeGroup}
                  </p>
                  <p>
                    <strong>Customer Type:</strong> {formData.customerType}
                  </p>
                </div>

                {/* Checkbox and Submit Button */}
                <div className="mt-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={isConsentChecked}
                      onChange={handleConsentChange}
                      className="h-4 w-4 text-blue-600"
                    />
                    <span className="text-sm text-gray-600">
                      Opt-in consent for legal purposes
                    </span>
                  </label>
                </div>

                <div className="mt-8 flex justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-6 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!isSubmitEnabled}
                    className={`px-6 py-2 rounded-md text-white ${
                      isSubmitEnabled
                        ? "bg-green-600 hover:bg-green-500"
                        : "bg-gray-300"
                    }`}
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}

            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MultiStepFormModal;
