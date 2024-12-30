/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
  app(input) {
    return {
      name: "alftrin",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: { cloudflare: "5.45.0" },
    };
  },
  async run() {
    new sst.aws.Remix("AlfAndTrin", {
      domain:
        $app.stage === "prod"
          ? {
              name: "alfandtrin.com",
              dns: sst.cloudflare.dns(),
            }
          : undefined,
    });
  },
});
