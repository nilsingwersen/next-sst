// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
  app(input) {
    return {
      name: "next-app",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: { cloudflare: "5.49.0" },
    };
  },
  async run() {
    new sst.aws.Nextjs("NextSST", {
      domain: {
        name: "app.ingwersen.dev",
        dns: sst.cloudflare.dns(),
      },
    });
  },
});
