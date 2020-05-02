export const handleAjaxError = (err) => {
  // error('Something went wrong');
  // console.warn(err);
  console.log(err)
};

export const isEmptyObject = obj => Object.keys(obj).length === 0;

export const validateUser = (user) => {
  const errors = {};

  if (user.name === '') {
    errors.name = 'You must enter a user name';
  }

  if (user.age === '') {
    errors.age = 'You must enter a user age';
  }

  if (user.address === '') {
    errors.address = 'You must enter user address';
  }

  return errors;
};