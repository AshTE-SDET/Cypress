export const FourDigitNumber = () => {
    return Math.floor(1000 + Math.random() * 9000); // Generates a random number between 1000 and 9999
  };
  export const NineDigitNumber = () => {
    return Math.floor(1000 + Math.random() * 999999999); // Generates a random number between 1000 and 9999
  };
  // number.cy.js


  export const CurrentDate = () => {
    const date = new Date();
    let day = String(date.getDate()).padStart(2, '0'); // Day with leading zero
    let month = String(date.getMonth() + 1).padStart(2, '0'); // Month with leading zero
    const year = date.getFullYear();

    // Ensure month doesn't exceed '12'
    month = month > 12 ? '12' : month;

    return `${year}-${day}-${month}`;
};
  