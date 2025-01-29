export const formatValue = (rawValue: string): string => {
    let result = "";
    // Check if rawValue is a string and not null or undefined
    if (typeof rawValue === 'string' && rawValue.trim() !== "") {
      const numericValue = parseFloat(rawValue.replace(/,/g, ""));
      if (!isNaN(numericValue)) {
        result = numericValue.toLocaleString();
      }
    }
    return result;
  };
  
  export const parseFormattedValue = (formattedValue: string): number => {

    if (typeof formattedValue === 'string' && formattedValue.trim() !== "") {
      const cleanValue = formattedValue.replace(/,/g, "");
      const numericValue = parseFloat(cleanValue);
      return isNaN(numericValue) ? NaN : numericValue;
    }
    return NaN; // Return NaN if the input is not valid
  };
  