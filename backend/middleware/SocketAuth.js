io.use((socket, next) => {
    try {
      const token = socket.handshake.auth.token;
      const decoded = jwt.verify(token, "SECRET");
  
      socket.user = decoded;
      next();
    } catch {
      next(new Error("Auth error"));
    }
  });