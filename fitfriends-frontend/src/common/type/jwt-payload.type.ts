import { UserRoleType } from "./user-role.type";


export type JwtPayloadType = {
  sub: string;
  email: string;
  role: UserRoleType;
  exp: number;
  iat: number;
};
