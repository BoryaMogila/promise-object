function mapPromises(object) {
  const resolved = Array.isArray(object) ? [] : {};
  let innerPromises = [];
  const promises = Object
    .entries(object)
    .map(async ([key, promise]) => {
      if (typeof promise !== 'object' || typeof promise.then !== 'undefined') {
        return resolved[key] = await promise;
      }
      const { promises: promises, resolved: resolved2 } = mapPromises(promise);
      innerPromises = innerPromises.concat(promises);
      resolved[key] = resolved2;
    });
  return {
    promises: promises.concat(innerPromises),
    resolved,
  };
}

module.exports = async function promiseObject(object) {
  const { promises, resolved } = mapPromises(object);
  await Promise.all(promises);
  return resolved;
};
