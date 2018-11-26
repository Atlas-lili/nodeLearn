module.exports = {
  root: process.cwd(),
  hostname: '127.0.0.1',
  port: 3000,
  compresss: /\.(html|js|css|md)/,
  cache: {
      maxAge: 600,
      expires: true,
      cacheControl: true,
      lastModified: true,
      etag: true
  }
};
