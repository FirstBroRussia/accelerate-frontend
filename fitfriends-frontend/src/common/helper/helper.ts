import { JwtPayloadType } from "../type/jwt-payload.type";

export const parseJwt = (jwtToken: string): [any, JwtPayloadType] => {
  const parts = jwtToken.split('.');

  const encodedHeader = parts[0];
  const encodedPayload = parts[1];

  const decodedHeader = JSON.parse(atob(encodedHeader));
  const decodedPayload = JSON.parse(atob(encodedPayload));

  return [decodedHeader, decodedPayload];
};
