let states = {
  currentLoginUser: null,
};

let connectors = {};

const updateState = (field: string, value: any, listenToChanges = true) => {
  try {
    (states as any)[field] = value;

    if (listenToChanges && (connectors as any)[field]) {
      connectors = {
        ...connectors,
        ...(connectors as any)[field]((states as any)[field]),
      };
    }
  } catch (error) {
    throw error;
  }
};

const stateListener = (field: string, callback: any) => {
  const stateHandler = (resState: any) => {
    callback(resState);
  };

  if (!(connectors as any)[field]) {
    (connectors as any)[field] = stateHandler;
  }
};

const getState = (field: string, property?: string) => {
  /** GET SPECIFIC PROPERTY */
  if(property) {
    return (states as any)[field][property]
  }

  return (states as any)[field];
};

const removeStateListener = (field: string) => {
  delete (connectors as any)[field];
};

const incrementState = (field: string, value: number, callback: any) => {
  (states as any)[field] = value ? (states as any)[field] + value : (states as any)[field] + 1;
  if(callback) callback((states as any)[field]);
}

const incrementAverageState = (field: string, value: number, totalItems: number, callback: any) => {
  (states as any)[field] = value ? ((states as any)[field] + value) / totalItems : ((states as any)[field] + 1) / totalItems;
  if(callback) callback((states as any)[field]);
}

export {stateListener, updateState, getState, removeStateListener, incrementState, incrementAverageState};
