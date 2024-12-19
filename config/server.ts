export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  middleware: [
    // Middleware to force HTTPS if needed
    {
      name: 'force-https',
      config: {
        enabled: true,
      },
    },
  ],
});