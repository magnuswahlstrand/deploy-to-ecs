/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
    app(input) {
        return {
            name: "deploy-to-ecs",
            removal: input?.stage === "production" ? "remove" : "remove",
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

        cluster.addService("EcsDemoService", {
            public: {
                ports: [
                    {listen: "80/http", forward: "8000/http"},
                ],
            },
        });
        cluster.addService("EcsDemoServiceGo", {
            image: {
                context: "./src/go",
                dockerfile: "./src/go/Dockerfile",
            },
            public: {
                ports: [
                    {listen: "80/http", forward: "8000/http"},
                ],
            },
        });

        return {};
    }
});
