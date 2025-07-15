import React, { useId } from 'react';

export const useMultiIdObject = (keys) => {
  const baseId = useId();
  return keys.reduce((acc, key) => {
    acc[key] = `${baseId}-${key}`;
    return acc;
  }, {});
};