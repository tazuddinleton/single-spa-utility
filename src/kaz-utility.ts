// Anything exported from this file is importable by other in-browser modules.
export interface UserInfo {
    name: string;
    id: string;
    token: string;
}
export function jwtDecoder(paylod: any): UserInfo {
    return <UserInfo>{name: 'Aclice', id: '1234', token: 'blahblah'};
}