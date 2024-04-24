// The Factory Pattern abstracts the object creation process within a specialized function known as the factory,
// createUser is our factory function
// Its goal is to provide a unified interface for creating various types of objects without revealing the intricate
// details of their construction.
const createUser = (role, userInfo) => {
  const user = { name: userInfo.name, password: userInfo.password };
  const specificInfo = {
    admin: () => ({ role: "Admin", key: userInfo.key }),
    customer: () => ({ role: "Customer", address: userInfo.address }),
    seller: () => ({
      role: "Seller",
      shopAddress: userInfo.shopAddress,
      contact_No: userInfo.contact_No,
    }),
  };

  const additionalInfo = specificInfo[role] ? specificInfo[role] : null;
  if (!additionalInfo) {
    throw new Error("Invalid role specified.");
  }

  return { ...user, ...additionalInfo };
};

// Example usage:
const adminUser = createUser("admin", {
  name: "Abhishek",
  password: "Abhi1233",
  key: "#1244534-fadsv34",
});
const customerUser = createUser("customer", {
  name: "John Doe",
  password: "Password123",
  address: "123 Main St",
});
const sellerUser = createUser("seller", {
  name: "Jane Smith",
  password: "SellerPass",
  shopAddress: "456 Market St",
  contact_No: "123-456-7890",
});

console.log("Admin User:", adminUser);
console.log("Customer User:", customerUser);
console.log("Seller User:", sellerUser);
