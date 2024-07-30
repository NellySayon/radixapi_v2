export function decodeJWT(token) {
    const parts = token.split('.');
    if (parts.length !== 3) {
      console.log('The JWT token is invalid');
    }
  
    const header = JSON.parse(atob(parts[0]));
    const payload = JSON.parse(atob(parts[1]));
    const signature = parts[2];
  
    return { header, payload, signature };
  }


export function isJWTExpired(token) {
    if (!token) {
      return true;
    }
    const { payload } = decodeJWT(token);
    const now = Math.floor(Date.now() / 1000);
    return payload.exp < now;
  }


