/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
    app(input) {
        return {
            name: "deploy-to-ecs",
            removal: input?.stage === "production" ? "retain" : "remove",
            home: "aws",
            providers: {
                aws: {
                    region: "eu-north-1",
                },
            }
        };
    },
    async run() {
        const vpc = new sst.aws.Vpc("EcsDemoVpc");

        const cluster = new sst.aws.Cluster("EcsDemoCluster", {vpc});

        const svc = cluster.addService("EcsDemoService", {
            public: {
                ports: [
                    {listen: "80/http", forward: "8000/http"},
                ],
            },
        });

        return {
            ClusterARN: cluster.urn,
            // Make this optional only for production
            // ServiceURL: this.app?.stage ?? "http://localhost:3000",
        };
    }
});
