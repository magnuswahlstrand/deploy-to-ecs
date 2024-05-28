# Deploy to ECS

Example project how to deploy two simple web application to ECS. 
* One in Go (using [go-chi/chi](https://github.com/go-chi/chi))
* One using Deno (using [hono](https://github.com/honojs/hono))

Deployed using [SST ion](https://ion.sst.dev/docs/).
If the ECS cluster is still up, the applications are reachable at:

* Go app - [EcsDemoService](http://producti-EcsDemoServiceL-1619450048.eu-north-1.elb.amazonaws.com)
* Deno app - [EcsDemoServiceGo](http://producti-EcsDemoServiceG-624020955.eu-north-1.elb.amazonaws.com)