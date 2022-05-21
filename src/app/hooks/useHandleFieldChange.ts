import React from "react";

const useHandleFieldChange = (
  formData: any,
  setState: React.SetStateAction<any>
) => {
  const handleFieldChange = (key: string, value: string) => {
    setState({ ...formData, [key]: value });
  };

  return { handleFieldChange };
};

export default useHandleFieldChange;
