export const serializeFirestoreData = (data) => {
  if (Array.isArray(data)) {
    return data.map(serializeFirestoreData);
  } else if (typeof data === "object" && data !== null) {
    if (data.constructor.name === "DocumentReference") {
      return {
        _type: "DocumentReference",
        path: data.path,
      };
    }
    const serialized = {};
    for (const [key, value] of Object.entries(data)) {
      serialized[key] = serializeFirestoreData(value);
    }
    return serialized;
  }
  return data;
};
