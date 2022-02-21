export const validate = (contacts) => {
  const {
    address,
    name,
    phone,
    email,
    packageType,
  } = contacts;

  const fieldsValidity = {
    address: address.length > 0,
    name: name.length > 0,
    phone: phone.match(/^((8|\+7)[-]?)?(\(?\d{3}\)?[-]?)?[\d\- ]{6,10}$/),
    email: email.toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ),
    packageType: packageType.length > 0,
    comment: true,
  };

  const isValid = Object.values(fieldsValidity).every(val => val);

  return {
    isValid,
    fields: fieldsValidity,
  };
};
