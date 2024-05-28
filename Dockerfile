FROM denoland/deno:1.43.6

# The port that your application listens to.
EXPOSE 8000

WORKDIR /app

# Prefer not to run as root.
USER deno

# Cache the dependencies as a layer (the following two steps are re-run only when deps.ts is modified).
# Ideally cache deps.ts will download and compile _all_ external files used in main.ts.
# TODO: Should deno.lock be included here?
COPY deps.ts .
RUN deno cache deps.ts

# These steps will be re-run upon each file change in your working directory:
ADD main.ts .
# Compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno cache main.ts

#RUN which deno
#RUN deno --version
RUN deno --help

CMD ["deno", "serve", "--allow-net", "main.ts"]