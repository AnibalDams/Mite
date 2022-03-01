import jwt from 'jsonwebtoken';

const {verify} = jwt;

const authenticationWithJwt = (authToken) => {
  const key = process.env.JWTKEY;

  if (authToken) {
    verify(authToken, key, (err, user) => {
      if (err) {
        return {message: 'invalid token'};
        next(err);
      }
      return user;
    });
  }
};

export default authenticationWithJwt;
