const company = {
    name: "Tech Innovations",
    location: {
      city: "Bnaglore",
      country: "IND"
    },
    employees: [
      { name: "Rose", role: "Developer", age: 30 },
      { name: "Priya", role: "Designer", age: 25 }
    ]
  };  
  // Convert to JSON string
  const jsonCompany = JSON.stringify(company);
  console.log("Company JSON:", jsonCompany);
 const parsedCompany = JSON.parse(jsonCompany);
  console.log("Company Name:", parsedCompany.name);  // Outputs: Tech Innovations
  console.log("Location:", parsedCompany.location.city);  // Outputs: Banglore
  console.log("First Employee:", parsedCompany.employees[0].name);  // Outputs: Rose
  console.log("Second Employee Role:", parsedCompany.employees[1].role);  // Outputs: Designer
  