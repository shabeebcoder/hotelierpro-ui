# Development stage
FROM node:18.17.1
WORKDIR /app
COPY package*.json ./
COPY postcss*.js ./
COPY rollup*.js ./
COPY tsconfig*.json ./
COPY . ./
RUN npm install
CMD ["npm", "run", "dev"]


# Production stage
# FROM node:14 AS production
# WORKDIR /app
# COPY package*.json ./
# COPY postcss*.js ./
# COPY rollup*.js ./
# COPY tsconfig*.json ./
# RUN npm install --production
# COPY . .
# RUN npm run storybook:export


# Publish to npm
RUN echo "//registry.npmjs.org/:_authToken=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" > .npmrc
RUN npm publish

# Final stage
# FROM node:14-alpine
# WORKDIR /app
# COPY --from=production /app /app
# EXPOSE 6006
# CMD ["npm", "run", "dev"]



